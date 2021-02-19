function getData(query){
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve({data: `搜索结果更新：${new Date().toLocaleString()}`, total: 12});
        }, 2000);
    });
}
