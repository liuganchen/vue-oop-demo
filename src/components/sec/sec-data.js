export const requestStaticData = {
    createRangeTime: [],
    updateRangeTime: [],
    searchText: '',
}
export function formatRequestData(request){
    // 1, 格式化入参
    if(request.createRangeTime.length > 1){
        request = {
            ...request,
            createRangeTimeStartTime: request.createRangeTime[0],
            createRangeTimeEndTime: request.createRangeTime[1]
        }
    }
    if(request.updateRangeTime.length > 1){
        request = {
            ...request,
            updateRangeTimeStartTime: request.updateRangeTime[0],
            updateRangeTimeEndTime: request.updateRangeTime[1],
        }
    }
    return request;
}
