const express = require('express');
const path = require('path');

module.exports = router => {
    // 開放靜態資源路由
    router.use('/static', express.static(path.join(__dirname, '../../public/static')));
};

