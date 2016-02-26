var nw = {
    src_folders: ['./src/tests'],
    output_folder: './results',
    //custom_assertions_path: './assertions',
    //
    //
    //custom_commands_path: './commands',
    //page_objects_path: './components',
    globals_path: './src/config/environment',
    live_output: true,
    selenium: {
        start_process: true,
        server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.49.0.jar',
        log_path: './results',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
            'webdriver.ie.driver': './node_modules/dalek-browser-ie/lib/bin/IEDriverServer.exe'
        }
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_host: '127.0.0.1',
            selenium_port: 4444,
            silent: true,
            disable_colors: false,
            screenshots: {
                enabled: true,
                path: './results/screenshots'
            },
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
        //globals: {
        //    waitForConditionTimeout: 60000,
        //    urls: {
        //        homepage: "https://encryptyourself.com"
        //    }
        //},
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true
            }
        },
        ie: {
            desiredCapabilities: {
                browserName: 'internet explorer',
                javascriptEnabled: true
            }
        },
        phantom: {
            desiredCapabilities: {
                browserName: 'phantomjs',
                'phantomjs.binary.path': require('phantomjs').path,
                javascriptEnabled: true
            }
        }
    }
};
module.exports = nw;
//# sourceMappingURL=nw.js.map