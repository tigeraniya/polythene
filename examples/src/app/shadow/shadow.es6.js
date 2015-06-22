'use strict';

import m from 'mithril';
import shadow from 'polythene/shadow/shadow';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./shadow.css!');

const NAME = 'Shadow';

let app,
    titleBlock,
    interactiveShadow,
    createContent;

titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

interactiveShadow = {
    controller: function(args) {
        let STEPS = 5;

        return {
            z: m.prop(STEPS + args.initZ),

            getZ: function() {
                return Math.abs((this.z() % (2 * STEPS)) - STEPS);
            }
        };
    },
    view: function(ctrl, args) {
        return m('div.animated.layout.horizontal', {
            class: args.class,
            onclick: function() {
                let z = ctrl.z();
                ctrl.z(++z);
            }
        }, [
            m('div.self-center', 'z = ' + ctrl.getZ()),
            m.component(shadow, {
                z: ctrl.getZ(),
                animated: true,
                refresh: true
            })
        ]);
    }
};

createContent = function() {
    let indices = [0, 1, 2, 3, 4, 5];
    let tapItems = [{
        id: 1,
        class: 'shadow-card',
        initZ: 1
    }, {
        id: 2,
        class: 'shadow-fab',
        initZ: 3
    }];
    return m('.demo-content', [
        m.component(titleBlock, {
            title: 'Shadows',
            content: m('div.layout.horizontal.wrap', [
                indices.map(function(z) {
                    return m('div.layout.horizontal', {
                        class: 'shadow-card'
                    }, [
                        m('div.self-center', 'z = ' + z),
                        m.component(shadow, {
                            z: z
                        })
                    ]);
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Interactive and animated',
            content: m('div.layout.horizontal', [
                tapItems.map(function(item) {
                    return m.component(interactiveShadow, {
                        id: item.id,
                        class: item.class,
                        initZ: item.initZ
                    });
                })
            ])
        })
    ]);
};

app = {};
app.view = function() {
    return [
        nav(NAME, [createContent(), github])
    ];
};

m.mount(document.body, app);