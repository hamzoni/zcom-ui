import React from "react";
import PropTypes from "prop-types";
import AssetActions from "actions/AssetActions";
import SettingsActions from "actions/SettingsActions";
import {Link} from "react-router-dom";
import Immutable from "immutable";
import Translate from "react-translate-component";
import LinkToAccountById from "../Utility/LinkToAccountById";
import assetUtils from "common/asset_utils";
import counterpart from "counterpart";
import FormattedAsset from "../Utility/FormattedAsset";
import AssetName from "../Utility/AssetName";
import {ChainStore} from "zcomjs";
import utils from "common/utils";
import ls from "common/localStorage";
import PaginatedList from "../Utility/PaginatedList";
import {Apis} from "zcomjs-ws";
import {Row, Col, Radio, Table, Select, Input, Icon, Button} from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

let accountStorage = new ls("__graphene__");

class Assets extends React.Component {
    constructor(props) {
        super();

        let chainID = Apis.instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);
        else chainID = "4018d784";

        this.state = {
            chainID,
            foundLast: false,
            lastAsset: "",
            isLoading: false,
            totalAssets:
                typeof accountStorage.get(`totalAssets_${chainID}`) != "object"
                    ? accountStorage.get(`totalAssets_${chainID}`)
                    : chainID && chainID === "4018d784"
                        ? 3000
                        : 50, // mainnet has 3000+ assets, other chains may not have that many
            assetsFetched: 0,
            activeFilter: "market",
            filterSearch: props.filterSearch || "",
            rowsOnPage: "25"
        };

        this._toggleFilter = this._toggleFilter.bind(this);
        this.handleRowsChange = this.handleRowsChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            !Immutable.is(nextProps.assets, this.props.assets) ||
            !utils.are_equal_shallow(nextState, this.state)
        );
    }

    componentWillMount() {
        this._checkAssets(this.props.assets, true);
    }

    handleFilterChange(e) {
        this.setState({
            filterSearch: (e.target.value || "").toUpperCase()
        });
    }

    handleRowsChange(rows) {
        this.setState({
            rowsOnPage: rows
        });
    }

    _checkAssets(assets, force) {
        this.setState({isLoading: true});
        let lastAsset = assets
            .sort((a, b) => {
                if (a.symbol > b.symbol) {
                    return 1;
                } else if (a.symbol < b.symbol) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .last();

        if (assets.size === 0 || force) {
            AssetActions.getAssetList.defer("A", 100);
            this.setState({assetsFetched: 100});
        } else if (assets.size >= this.state.assetsFetched) {
            AssetActions.getAssetList.defer(lastAsset.symbol, 100);
            this.setState({assetsFetched: this.state.assetsFetched + 99});
        }

        if (assets.size > this.state.totalAssets) {
            accountStorage.set(
                `totalAssets_${this.state.chainID}`,
                assets.size
            );
        }

        if (this.state.assetsFetched >= this.state.totalAssets - 100) {
            this.setState({isLoading: false});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.assets !== this.props.assets) {
            this._checkAssets(nextProps.assets);
        }
    }

    linkToAccount(name_or_id) {
        if (!name_or_id) {
            return <span>-</span>;
        }

        return <LinkToAccountById account={name_or_id} />;
    }

    _toggleFilter(e) {
        this.setState({
            activeFilter: e.target.value
        });
    }

    _onFilter(type, e) {
        this.setState({[type]: e.target.value.toUpperCase()});
        SettingsActions.changeViewSetting({
            [type]: e.target.value.toUpperCase()
        });
    }

    render() {
        let {assets} = this.props;
        let {activeFilter} = this.state;

        let placeholder = counterpart.translate("markets.filter").toUpperCase();
        let coreAsset = ChainStore.getAsset("1.3.0");

        let uia;
        let mia;
        let pm;

        let dataSource = [];
        let columns = [];

        if (activeFilter == "user") {
            columns = [
                {
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    sorter: (a, b) => {
                        return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
                    },
                    render: item => {
                        return (
                            <Link to={`/asset/${item}`}>
                                <AssetName name={item} />
                            </Link>
                        );
                    }
                },
                {
                    key: "issuer",
                    title: "issuer",
                    dataIndex: "issuer",
                    render: item => {
                        return this.linkToAccount(item);
                    }
                },
                {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    render: (item, record) => {
                        return (
                            <FormattedAsset
                                amount={record.currentSupply}
                                asset={record.assetId}
                                hide_asset={true}
                            />
                        );
                    }
                },
                {
                    key: "marketId",
                    title: "",
                    dataIndex: "marketId",
                    render: item => {
                        return (
                            <Button type="primary" className="mono-btn-asset">
                                <Link to={`/market/${item}`}>
                                    <Icon type={"line-chart"} />{" "}
                                    <Translate content="header.exchange" />
                                </Link>
                            </Button>
                        );
                    }
                }
            ];

            assets
                .filter(a => {
                    return (
                        !a.market_asset &&
                        a.symbol.indexOf(this.state.filterSearch) !== -1
                    );
                })
                .map(asset => {
                    let description = assetUtils.parseDescription(
                        asset.options.description
                    );

                    let marketID =
                        asset.symbol +
                        "_" +
                        (description.market
                            ? description.market
                            : coreAsset
                                ? coreAsset.get("symbol")
                                : "BTS");

                    dataSource.push({
                        symbol: asset.symbol,
                        issuer: asset.issuer,
                        currentSupply: asset.dynamic.current_supply,
                        assetId: asset.id,
                        marketId: marketID
                    });
                })
                .toArray();
        }

        if (activeFilter == "market") {
            columns = [
                {
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    render: item => {
                        return (
                            <Link to={`/asset/${item}`}>
                                <AssetName name={item} />
                            </Link>
                        );
                    }
                },
                {
                    key: "issuer",
                    title: "issuer",
                    dataIndex: "issuer",
                    render: item => {
                        return this.linkToAccount(item);
                    }
                },
                {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    render: (item, record) => {
                        return (
                            <FormattedAsset
                                amount={record.currentSupply}
                                asset={record.assetId}
                                hide_asset={true}
                            />
                        );
                    }
                },
                {
                    key: "marketId",
                    title: "",
                    dataIndex: "marketId",
                    render: item => {
                        return (
                            <Button type="primary" className="mono-btn-asset">
                                <Link to={`/market/${item}`}>
                                    <Icon type={"line-chart"} />{" "}
                                    <Translate content="header.exchange" />
                                </Link>
                            </Button>
                        );
                    }
                }
            ];

            mia = assets
                .filter(a => {
                    return (
                        a.bitasset_data &&
                        !a.bitasset_data.is_prediction_market &&
                        a.symbol.indexOf(this.state.filterSearch) !== -1
                    );
                })
                .map(asset => {
                    let description = assetUtils.parseDescription(
                        asset.options.description
                    );

                    let marketID =
                        asset.symbol +
                        "_" +
                        (description.market
                            ? description.market
                            : coreAsset
                                ? coreAsset.get("symbol")
                                : "BTS");

                    dataSource.push({
                        symbol: asset.symbol,
                        issuer: asset.issuer,
                        currentSupply: asset.dynamic.current_supply,
                        assetId: asset.id,
                        marketId: marketID
                    });
                })
                .toArray();
        }

        if (activeFilter == "prediction") {
            pm = assets
                .filter(a => {
                    let description = assetUtils.parseDescription(
                        a.options.description
                    );

                    return (
                        a.bitasset_data &&
                        a.bitasset_data.is_prediction_market &&
                        (a.symbol
                            .toLowerCase()
                            .indexOf(this.state.filterSearch.toLowerCase()) !==
                            -1 ||
                            description.main
                                .toLowerCase()
                                .indexOf(
                                    this.state.filterSearch.toLowerCase()
                                ) !== -1)
                    );
                })
                .map(asset => {
                    let description = assetUtils.parseDescription(
                        asset.options.description
                    );
                    let marketID =
                        asset.symbol +
                        "_" +
                        (description.market
                            ? description.market
                            : coreAsset
                                ? coreAsset.get("symbol")
                                : "BTS");

                    return (
                        <tr
                            key={asset.id.split(".")[2]}
                            className="mono-row-pma"
                        >
                            <td style={{width: "80%"}}>
                                <div
                                    style={{paddingTop: 10, fontWeight: "bold"}}
                                >
                                    <Link to={`/asset/${asset.symbol}`}>
                                        <AssetName name={asset.symbol} />
                                    </Link>
                                    {description.condition ? (
                                        <span> ({description.condition})</span>
                                    ) : null}
                                </div>
                                {description ? (
                                    <div
                                        style={{
                                            padding: "10px 20px 5px 0",
                                            lineHeight: "18px"
                                        }}
                                    >
                                        {description.main}
                                    </div>
                                ) : null}
                                <div
                                    style={{
                                        padding: "0 20px 5px 0",
                                        lineHeight: "18px"
                                    }}
                                >
                                    <LinkToAccountById account={asset.issuer} />
                                    <span>
                                        {" "}
                                        -{" "}
                                        <FormattedAsset
                                            amount={
                                                asset.dynamic.current_supply
                                            }
                                            asset={asset.id}
                                        />
                                    </span>
                                    {description.expiry ? (
                                        <span> - {description.expiry}</span>
                                    ) : null}
                                </div>
                            </td>
                            <td
                                className="mono-respon-asset"
                                style={{width: "20%"}}
                            >
                                <Button
                                    type="primary"
                                    className="mono-btn-asset"
                                >
                                    <Link to={`/market/${marketID}`}>
                                        <Translate content="header.exchange" />
                                    </Link>
                                </Button>
                            </td>
                        </tr>
                    );
                })
                .sort((a, b) => {
                    if (a.key > b.key) {
                        return -1;
                    } else if (a.key < b.key) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
                .toArray();
        }

        let assetListHeader = (
            <tr>
                <th>
                    <Translate
                        component="span"
                        content="explorer.assets.symbol"
                    />
                </th>
                <th>
                    <Translate
                        component="span"
                        content="explorer.assets.issuer"
                    />
                </th>
                <th>
                    <Translate component="span" content="markets.supply" />
                </th>
                <th />
            </tr>
        );

        return (
            <Row type="flex" justify="space-between">
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                    <RadioGroup
                        className="mono-rd-group"
                        defaultValue="market"
                        size="large"
                        value={this.state.activeFilter}
                        onChange={this._toggleFilter}
                    >
                        <RadioButton className="mono-rd-btn" value="market">
                            <Translate
                                className="mono-rd-text"
                                content="explorer.assets.market"
                            />
                            <Icon
                                className="mono-rd-icon"
                                type="arrow-right"
                                theme="outlined"
                            />
                        </RadioButton>
                        <RadioButton className="mono-rd-btn" value="user">
                            <Translate
                                className="mono-rd-text"
                                content="explorer.assets.user"
                            />
                            <Icon
                                className="mono-rd-icon"
                                type="arrow-right"
                                theme="outlined"
                            />
                        </RadioButton>
                        <RadioButton className="mono-rd-btn" value="prediction">
                            <Translate
                                className="mono-rd-text"
                                content="explorer.assets.prediction"
                            />
                            <Icon
                                className="mono-rd-icon"
                                type="arrow-right"
                                theme="outlined"
                            />
                        </RadioButton>
                    </RadioGroup>
                    <Select
                        size="large"
                        className="mono-select"
                        defaultValue="50"
                        value={this.state.rowsOnPage}
                        onChange={this.handleRowsChange}
                    >
                        <Option key={"10"}>10 rows</Option>
                        <Option key={"25"}>25 rows</Option>
                        <Option key={"50"}>50 rows</Option>
                        <Option key={"100"}>100 rows</Option>
                        <Option key={"200"}>200 rows</Option>
                    </Select>
                </Col>
                <Col
                    xs={{span: 24, offset: 0}}
                    sm={{span: 24, offset: 0}}
                    md={{span: 24, offset: 0}}
                    lg={{span: 17, offset: 1}}
                    xl={{span: 17, offset: 1}}
                >
                    <Row>
                        <Col span={24}>
                            <Input
                                className="mono-input-master"
                                placeholder={"Quick Search"}
                                value={this.state.filterSearch}
                                onChange={this.handleFilterChange}
                            />
                        </Col>
                        <Col span={24}>
                            {activeFilter == "prediction" ? (
                                <div style={{paddingBottom: 20}}>
                                    <PaginatedList rows={pm} pageSize={6} />
                                </div>
                            ) : (
                                <Table
                                    rowClassName="mono-row-assets"
                                    rowKey="symbol"
                                    columns={columns}
                                    dataSource={dataSource}
                                    pagination={{
                                        position: "bottom",
                                        pageSize: Number(this.state.rowsOnPage)
                                    }}
                                />
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

Assets.defaultProps = {
    assets: {}
};

Assets.propTypes = {
    assets: PropTypes.object.isRequired
};

export default Assets;
