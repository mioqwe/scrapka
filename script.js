// ==UserScript==
// @name         Google Maps Scraper - Server Sender
// @namespace    http://google.com/
// @version      2.0.0
// @description  Sends Google Maps data to local server (localhost:8080)
// @author       Web Automation Lover
// @match        *://*.google.com/maps/search/*/*
// @match        *://*.google.ad/maps/search/**
// @match        *://*.google.ae/maps/search/**
// @match        *://*.google.ac/maps/search/**
// @match        *://*.google.com.ag/maps/search/**
// @match        *://*.google.com.ai/maps/search/**
// @match        *://*.google.com.af/maps/search/**
// @match        *://*.google.al/maps/search/**
// @match        *://*.google.am/maps/search/**
// @match        *://*.google.co.ao/maps/search/**
// @match        *://*.google.at/maps/search/**
// @match        *://*.google.com.ar/maps/search/**
// @match        *://*.google.as/maps/search/**
// @match        *://*.google.com.au/maps/search/**
// @match        *://*.google.com.bd/maps/search/**
// @match        *://*.google.az/maps/search/**
// @match        *://*.google.ba/maps/search/**
// @match        *://*.google.bg/maps/search/**
// @match        *://*.google.be/maps/search/**
// @match        *://*.google.bf/maps/search/**
// @match        *://*.google.com.bh/maps/search/**
// @match        *://*.google.com.bn/maps/search/**
// @match        *://*.google.bi/maps/search/**
// @match        *://*.google.bj/maps/search/**
// @match        *://*.google.bs/maps/search/**
// @match        *://*.google.com.bo/maps/search/**
// @match        *://*.google.com.br/maps/search/**
// @match        *://*.google.bt/maps/search/**
// @match        *://*.google.co.bw/maps/search/**
// @match        *://*.google.by/maps/search/**
// @match        *://*.google.com.bz/maps/search/**
// @match        *://*.google.ca/maps/search/**
// @match        *://*.google.com.kh/maps/search/**
// @match        *://*.google.cc/maps/search/**
// @match        *://*.google.cd/maps/search/**
// @match        *://*.google.cf/maps/search/**
// @match        *://*.google.cat/maps/search/**
// @match        *://*.google.cg/maps/search/**
// @match        *://*.google.ch/maps/search/**
// @match        *://*.google.ci/maps/search/**
// @match        *://*.google.co.ck/maps/search/**
// @match        *://*.google.cl/maps/search/**
// @match        *://*.google.cm/maps/search/**
// @match        *://*.google.cn/maps/search/**
// @match        *://*.google.com.co/maps/search/**
// @match        *://*.google.co.cr/maps/search/**
// @match        *://*.google.com.cu/maps/search/**
// @match        *://*.google.cv/maps/search/**
// @match        *://*.google.com.cy/maps/search/**
// @match        *://*.google.cz/maps/search/**
// @match        *://*.google.de/maps/search/**
// @match        *://*.google.dj/maps/search/**
// @match        *://*.google.dk/maps/search/**
// @match        *://*.google.dm/maps/search/**
// @match        *://*.google.com.do/maps/search/**
// @match        *://*.google.dz/maps/search/**
// @match        *://*.google.com.ec/maps/search/**
// @match        *://*.google.ee/maps/search/**
// @match        *://*.google.com.eg/maps/search/**
// @match        *://*.google.es/maps/search/**
// @match        *://*.google.com.et/maps/search/**
// @match        *://*.google.fi/maps/search/**
// @match        *://*.google.com.fj/maps/search/**
// @match        *://*.google.fm/maps/search/**
// @match        *://*.google.fr/maps/search/**
// @match        *://*.google.ga/maps/search/**
// @match        *://*.google.ge/maps/search/**
// @match        *://*.google.gf/maps/search/**
// @match        *://*.google.gg/maps/search/**
// @match        *://*.google.com.gh/maps/search/**
// @match        *://*.google.com.gi/maps/search/**
// @match        *://*.google.gl/maps/search/**
// @match        *://*.google.gm/maps/search/**
// @match        *://*.google.gp/maps/search/**
// @match        *://*.google.gr/maps/search/**
// @match        *://*.google.com.gt/maps/search/**
// @match        *://*.google.gy/maps/search/**
// @match        *://*.google.com.hk/maps/search/**
// @match        *://*.google.hn/maps/search/**
// @match        *://*.google.hr/maps/search/**
// @match        *://*.google.ht/maps/search/**
// @match        *://*.google.hu/maps/search/**
// @match        *://*.google.co.id/maps/search/**
// @match        *://*.google.iq/maps/search/**
// @match        *://*.google.ie/maps/search/**
// @match        *://*.google.co.il/maps/search/**
// @match        *://*.google.im/maps/search/**
// @match        *://*.google.co.in/maps/search/**
// @match        *://*.google.io/maps/search/**
// @match        *://*.google.is/maps/search/**
// @match        *://*.google.it/maps/search/**
// @match        *://*.google.je/maps/search/**
// @match        *://*.google.com.jm/maps/search/**
// @match        *://*.google.jo/maps/search/**
// @match        *://*.google.co.jp/maps/search/**
// @match        *://*.google.co.ke/maps/search/**
// @match        *://*.google.ki/maps/search/**
// @match        *://*.google.kg/maps/search/**
// @match        *://*.google.co.kr/maps/search/**
// @match        *://*.google.com.kw/maps/search/**
// @match        *://*.google.kz/maps/search/**
// @match        *://*.google.la/maps/search/**
// @match        *://*.google.com.lb/maps/search/**
// @match        *://*.google.com.lc/maps/search/**
// @match        *://*.google.li/maps/search/**
// @match        *://*.google.lk/maps/search/**
// @match        *://*.google.co.ls/maps/search/**
// @match        *://*.google.lt/maps/search/**
// @match        *://*.google.lu/maps/search/**
// @match        *://*.google.lv/maps/search/**
// @match        *://*.google.com.ly/maps/search/**
// @match        *://*.google.co.ma/maps/search/**
// @match        *://*.google.md/maps/search/**
// @match        *://*.google.me/maps/search/**
// @match        *://*.google.mg/maps/search/**
// @match        *://*.google.mk/maps/search/**
// @match        *://*.google.ml/maps/search/**
// @match        *://*.google.com.mm/maps/search/**
// @match        *://*.google.mn/maps/search/**
// @match        *://*.google.ms/maps/search/**
// @match        *://*.google.com.mt/maps/search/**
// @match        *://*.google.mu/maps/search/**
// @match        *://*.google.mv/maps/search/**
// @match        *://*.google.mw/maps/search/**
// @match        *://*.google.com.mx/maps/search/**
// @match        *://*.google.com.my/maps/search/**
// @match        *://*.google.co.mz/maps/search/**
// @match        *://*.google.com.na/maps/search/**
// @match        *://*.google.ne/maps/search/**
// @match        *://*.google.com.nf/maps/search/**
// @match        *://*.google.com.ng/maps/search/**
// @match        *://*.google.com.ni/maps/search/**
// @match        *://*.google.nl/maps/search/**
// @match        *://*.google.no/maps/search/**
// @match        *://*.google.com.np/maps/search/**
// @match        *://*.google.nr/maps/search/**
// @match        *://*.google.nu/maps/search/**
// @match        *://*.google.co.nz/maps/search/**
// @match        *://*.google.com.om/maps/search/**
// @match        *://*.google.com.pk/maps/search/**
// @match        *://*.google.com.pa/maps/search/**
// @match        *://*.google.com.pe/maps/search/**
// @match        *://*.google.com.ph/maps/search/**
// @match        *://*.google.pl/maps/search/**
// @match        *://*.google.com.pg/maps/search/**
// @match        *://*.google.pn/maps/search/**
// @match        *://*.google.com.pr/maps/search/**
// @match        *://*.google.ps/maps/search/**
// @match        *://*.google.pt/maps/search/**
// @match        *://*.google.com.py/maps/search/**
// @match        *://*.google.com.qa/maps/search/**
// @match        *://*.google.ro/maps/search/**
// @match        *://*.google.rs/maps/search/**
// @match        *://*.google.ru/maps/search/**
// @match        *://*.google.rw/maps/search/**
// @match        *://*.google.com.sa/maps/search/**
// @match        *://*.google.com.sb/maps/search/**
// @match        *://*.google.sc/maps/search/**
// @match        *://*.google.co.th/maps/search/**
// @match        *://*.google.com.tj/maps/search/**
// @match        *://*.google.tk/maps/search/**
// @match        *://*.google.tl/maps/search/**
// @match        *://*.google.tm/maps/search/**
// @match        *://*.google.to/maps/search/**
// @match        *://*.google.tn/maps/search/**
// @match        *://*.google.com.tr/maps/search/**
// @match        *://*.google.tt/maps/search/**
// @match        *://*.google.com.tw/maps/search/**
// @match        *://*.google.co.tz/maps/search/**
// @match        *://*.google.se/maps/search/**
// @match        *://*.google.com.sg/maps/search/**
// @match        *://*.google.sh/maps/search/**
// @match        *://*.google.si/maps/search/**
// @match        *://*.google.sk/maps/search/**
// @match        *://*.google.com.sl/maps/search/**
// @match        *://*.google.sn/maps/search/**
// @match        *://*.google.sm/maps/search/**
// @match        *://*.google.so/maps/search/**
// @match        *://*.google.st/maps/search/**
// @match        *://*.google.sr/maps/search/**
// @match        *://*.google.com.sv/maps/search/**
// @match        *://*.google.td/maps/search/**
// @match        *://*.google.tg/maps/search/**
// @match        *://*.google.com.ua/maps/search/**
// @match        *://*.google.co.ug/maps/search/**
// @match        *://*.google.co.uk/maps/search/**
// @match        *://*.google.com/maps/search/**
// @match        *://*.google.com.uy/maps/search/**
// @match        *://*.google.co.uz/maps/search/**
// @match        *://*.google.com.vc/maps/search/**
// @match        *://*.google.co.ve/maps/search/**
// @match        *://*.google.vg/maps/search/**
// @match        *://*.google.co.vi/maps/search/**
// @match        *://*.google.com.vn/maps/search/**
// @match        *://*.google.vu/maps/search/**
// @match        *://*.google.ws/maps/search/**
// @match        *://*.google.co.za/maps/search/**
// @match        *://*.google.co.zm/maps/search/**
// @match        *://*.google.co.zw/maps/search/**
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    const SERVER_URL = 'http://localhost:8080';
    const BATCH_SIZE = 10;
    const BATCH_TIMEOUT = 5000; // Send batch after 5 seconds

    // Stats
    let stats = {
        sent: 0,
        errors: 0,
        pending: 0
    };

    // Batch queue
    let batchQueue = [];
    let batchTimer = null;

    // Create status indicator
    function createStatusIndicator() {
        const indicator = $(`
            <div id="server-status" style="
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(0,0,0,0.8);
                color: #00ff00;
                padding: 10px 15px;
                border-radius: 5px;
                font-size: 12px;
                font-family: monospace;
                z-index: 99999;
                min-width: 200px;
            ">
                <div><strong>🚀 Server Sender</strong></div>
                <div id="server-status-text">Connecting...</div>
                <div style="margin-top: 5px; font-size: 11px;">
                    Sent: <span id="sent-count">0</span> |
                    Errors: <span id="error-count" style="color: #ff6666;">0</span> |
                    Pending: <span id="pending-count">0</span>
                </div>
            </div>
        `);
        $('body').append(indicator);
    }

    // Update status display
    function updateStatus(status, message) {
        const statusEl = $('#server-status-text');
        const indicator = $('#server-status');

        if (status === 'connected') {
            statusEl.css('color', '#00ff00').text(message || 'Connected to server');
            indicator.css('border', '2px solid #00ff00');
        } else if (status === 'error') {
            statusEl.css('color', '#ff6666').text(message || 'Server error');
            indicator.css('border', '2px solid #ff6666');
        } else if (status === 'sending') {
            statusEl.css('color', '#ffff00').text(message || 'Sending...');
        } else {
            statusEl.css('color', '#aaaaaa').text(message || 'Unknown');
        }

        $('#sent-count').text(stats.sent);
        $('#error-count').text(stats.errors);
        $('#pending-count').text(stats.pending);
    }

    // Check server health
    async function checkServer() {
        try {
            const response = await fetch(`${SERVER_URL}/health`, {
                method: 'GET',
                mode: 'cors'
            });
            if (response.ok) {
                updateStatus('connected', 'Server ready');
                return true;
            }
        } catch (e) {
            updateStatus('error', 'Server offline');
        }
        return false;
    }

    // Send batch to server
    async function sendBatch() {
        if (batchQueue.length === 0) return;

        const batch = [...batchQueue];
        batchQueue = [];
        stats.pending += batch.length;
        updateStatus('sending', `Sending ${batch.length} items...`);

        try {
            const response = await fetch(`${SERVER_URL}/api/data`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({ items: batch })
            });

            if (response.ok) {
                const result = await response.json();
                stats.sent += batch.length;
                stats.pending -= batch.length;
                updateStatus('connected', `Last batch: ${result.saved || batch.length} saved`);
                console.log(`✅ Sent ${batch.length} items to server`);
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            stats.errors += batch.length;
            stats.pending -= batch.length;
            updateStatus('error', `Error: ${error.message}`);
            console.error('❌ Failed to send batch:', error);
            // Put items back in queue for retry
            batchQueue.unshift(...batch);
        }
    }

    // Add item to batch queue
    function queueItem(item) {
        batchQueue.push(item);

        // Reset timer
        if (batchTimer) {
            clearTimeout(batchTimer);
        }

        // Send immediately if batch is full
        if (batchQueue.length >= BATCH_SIZE) {
            sendBatch();
        } else {
            // Otherwise schedule send
            batchTimer = setTimeout(sendBatch, BATCH_TIMEOUT);
        }

        updateStatus('connected', `Queued: ${batchQueue.length} items`);
    }

    // Format individual data item
    function formatDataItem(item) {
        const fieldConfig = {
            fullAddress: [39],
            placeId: [78],
            kgmid: [89],
            categories: [13],
            cid: [10],
            featuredImage: [37, 0, 0, 6, 0],
            name: [11],
            latitude: [9, 2],
            longitude: [9, 3],
            reviewCount: [4, 8],
            averageRating: [4, 7],
            website: [7, 0],
            domain: [7, 1],
        };

        const resultData = {};
        Object.keys(fieldConfig).forEach(key => {
            resultData[key] = handleSingleField(item[1], fieldConfig[key]);
        });

        // Process special fields
        const phones = handleSingleField(item[1], [178, 0, 1]);
        resultData.phones = phones?.map(d => d?.[0])?.join(', ') || '';

        const openingHours = handleSingleField(item[1], [34, 1]);
        resultData.openingHours = openingHours?.map(d => `${d[0]}:[${d[1]}]`)?.join(', ') || '';

        resultData.googleMapsURL = resultData.cid ? `https://www.google.com/maps?cid=${resultData.cid}` : '';
        resultData.googleKnowledgeURL = resultData.kgmid ? `https://www.google.com/maps/search/*?kgmid=${resultData.kgmid}&kponly` : '';
        resultData.categories = resultData.categories?.join?.(', ') || '';

        // Add timestamp
        resultData.scrapedAt = new Date().toISOString();

        function handleSingleField(itemData, config) {
            if (!itemData || !config || !config.length) return null;
            let currentData = itemData;
            for (let i = 0; i < config.length; i++) {
                currentData = currentData?.[config[i]];
            }
            return currentData;
        }

        return resultData;
    }

    // Initialize
    function init() {
        createStatusIndicator();
        checkServer();

        // Check server health periodically
        setInterval(checkServer, 30000);

        console.log('🚀 Google Maps Server Sender initialized');
        console.log('   Server URL:', SERVER_URL);
        console.log('   Batch size:', BATCH_SIZE);
    }

    // Modify XHR to capture data
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url;
        return originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function() {
        const isTargetUrl = this._url && this._url.includes('/search') && this._url.includes('tbm=map');

        if (isTargetUrl && !this._listenerAdded) {
            this._listenerAdded = true;

            this.addEventListener('load', function() {
                if (this._url.includes('/search?tbm=map')) {
                    try {
                        var rspJson = JSON.parse(this.responseText.replace(`/*""*/`,""));
                        var e = rspJson.d;
                        var cleanedData = e.replace(`)]}'`, "");

                        let parsedData = JSON.parse(cleanedData);
                        let dataList = parsedData[0][1];

                        let filteredData = dataList.filter(item => {
                            return item?.[14] !== undefined;
                        });

                        if (!filteredData || filteredData.length < 1) {
                            filteredData = parsedData[64];
                        }

                        if (filteredData) {
                            console.log(`📦 Captured ${filteredData.length} items from Google Maps`);

                            filteredData.forEach(item => {
                                const formatted = formatDataItem(item);
                                if (formatted.name) {
                                    queueItem(formatted);
                                }
                            });
                        }
                    } catch (error) {
                        console.error('Error parsing data:', error);
                    }
                }
            });
        }

        return originalSend.apply(this, arguments);
    };

    // Wait for jQuery to be ready
    if (typeof $ !== 'undefined') {
        init();
    } else {
        const checkJQuery = setInterval(() => {
            if (typeof $ !== 'undefined') {
                clearInterval(checkJQuery);
                init();
            }
        }, 100);
    }

})();
