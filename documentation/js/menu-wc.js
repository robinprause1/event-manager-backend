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
                    <a href="index.html" data-type="index-link">even-manager-backend documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' :
                                            'id="xs-controllers-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' :
                                        'id="xs-injectables-links-module-AppModule-5295e30c40312775bcc96c98ca11e532d0005cd3bed6bf81d4d85bb3482e68f2174a667a3d949b4a7e790100414cca2286b73b5ad9a6e33f8596c83635d7567e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventModule.html" data-type="entity-link" >EventModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' : 'data-bs-target="#xs-controllers-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' :
                                            'id="xs-controllers-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' }>
                                            <li class="link">
                                                <a href="controllers/EventController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' : 'data-bs-target="#xs-injectables-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' :
                                        'id="xs-injectables-links-module-EventModule-d032a8d89f950841482dda7df3a5ca981d4e4ffe0df132aa03c59b381b3263e36aab535fc29ec76eca7a797795b1b670869b066489e1504bd7a673d55d25d5e1"' }>
                                        <li class="link">
                                            <a href="injectables/EventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedbackModule.html" data-type="entity-link" >FeedbackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' : 'data-bs-target="#xs-controllers-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' :
                                            'id="xs-controllers-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' }>
                                            <li class="link">
                                                <a href="controllers/FeedbackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' : 'data-bs-target="#xs-injectables-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' :
                                        'id="xs-injectables-links-module-FeedbackModule-4f2924a3c1b646be200fc6d4938bfd0b973dfc2bc7529a4a0bbe875a29a29a3f8bdda5ad832f2e296232cb753108b26b070260ddfd34b25282ba17d73f2b4a27"' }>
                                        <li class="link">
                                            <a href="injectables/FeedbackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StaffImportModule.html" data-type="entity-link" >StaffImportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' : 'data-bs-target="#xs-controllers-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' :
                                            'id="xs-controllers-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' }>
                                            <li class="link">
                                                <a href="controllers/StaffImportController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffImportController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' : 'data-bs-target="#xs-injectables-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' :
                                        'id="xs-injectables-links-module-StaffImportModule-d4b15a280709537d3d83a8d2452c51d666841c1f7d22eaecce4f53a16906bcb1fc4526437e63c8100c5212e120a7aa3a9b7d7be524e0847eb7e7018e4fc215a7"' }>
                                        <li class="link">
                                            <a href="injectables/StaffImportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffImportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StaffModule.html" data-type="entity-link" >StaffModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' : 'data-bs-target="#xs-controllers-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' :
                                            'id="xs-controllers-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' }>
                                            <li class="link">
                                                <a href="controllers/StaffController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' : 'data-bs-target="#xs-injectables-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' :
                                        'id="xs-injectables-links-module-StaffModule-7c6024f6399ac7a4ea4bae14a06f07c204e9bb3e56c65eb7b35f55e022d05de7247371e4167f8571a08578e9ea0861d86614206fbe9268a345f61c3fe071e650"' }>
                                        <li class="link">
                                            <a href="injectables/StaffService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Event.html" data-type="entity-link" >Event</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feedback.html" data-type="entity-link" >Feedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Staff.html" data-type="entity-link" >Staff</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Staff-1.html" data-type="entity-link" >Staff</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});