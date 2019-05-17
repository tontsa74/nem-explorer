'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nem-explorer documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountsModule.html" data-type="entity-link">AccountsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountsModule-105463eec0688418633186813e83e914"' : 'data-target="#xs-components-links-module-AccountsModule-105463eec0688418633186813e83e914"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountsModule-105463eec0688418633186813e83e914"' :
                                            'id="xs-components-links-module-AccountsModule-105463eec0688418633186813e83e914"' }>
                                            <li class="link">
                                                <a href="components/AccountsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountsRoutingModule.html" data-type="entity-link">AccountsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9d9f6520868a244b10a56d1d681a7676"' : 'data-target="#xs-components-links-module-AppModule-9d9f6520868a244b10a56d1d681a7676"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9d9f6520868a244b10a56d1d681a7676"' :
                                            'id="xs-components-links-module-AppModule-9d9f6520868a244b10a56d1d681a7676"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotfoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlocksModule.html" data-type="entity-link">BlocksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' : 'data-target="#xs-components-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' :
                                            'id="xs-components-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' }>
                                            <li class="link">
                                                <a href="components/BlockTxesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlockTxesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlocksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlocksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TxesDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TxesDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' : 'data-target="#xs-pipes-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' :
                                            'id="xs-pipes-links-module-BlocksModule-1b0751f01a388a55d46c9775d2c42e59"' }>
                                            <li class="link">
                                                <a href="pipes/MessagePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessagePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MsNemesisPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MsNemesisPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlocksRoutingModule.html" data-type="entity-link">BlocksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NodesModule.html" data-type="entity-link">NodesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NodesModule-a2468d241067280934f8bf08ca072670"' : 'data-target="#xs-components-links-module-NodesModule-a2468d241067280934f8bf08ca072670"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NodesModule-a2468d241067280934f8bf08ca072670"' :
                                            'id="xs-components-links-module-NodesModule-a2468d241067280934f8bf08ca072670"' }>
                                            <li class="link">
                                                <a href="components/NodesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NodesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NodesRoutingModule.html" data-type="entity-link">NodesRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link">AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlockTxesComponent.html" data-type="entity-link">BlockTxesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotfoundComponent.html" data-type="entity-link">NotfoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TxesDetailsComponent.html" data-type="entity-link">TxesDetailsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NemNisService.html" data-type="entity-link">NemNisService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Account.html" data-type="entity-link">Account</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountInfo.html" data-type="entity-link">AccountInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountMetaData.html" data-type="entity-link">AccountMetaData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Block.html" data-type="entity-link">Block</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExplorerBlockViewModel.html" data-type="entity-link">ExplorerBlockViewModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExplorerBlockViewModelData.html" data-type="entity-link">ExplorerBlockViewModelData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExplorerTransferViewModel.html" data-type="entity-link">ExplorerTransferViewModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Height.html" data-type="entity-link">Height</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Node.html" data-type="entity-link">Node</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NodeCollection.html" data-type="entity-link">NodeCollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NodeEndPoint.html" data-type="entity-link">NodeEndPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NodeIdentity.html" data-type="entity-link">NodeIdentity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NodeMetaData.html" data-type="entity-link">NodeMetaData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transaction.html" data-type="entity-link">Transaction</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/MessagePipe.html" data-type="entity-link">MessagePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/MsNemesisPipe.html" data-type="entity-link">MsNemesisPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});