import Http from '../http';

export default class AdminModel extends Http {
  constructor() {
    super();
  }
  // 获取首页一级维修选项
  async getRepairCategoryList(repairId = 0) {
    const res = await this.request({
      url: `/star-admin/repairCategoryList/${repairId}`,
    });
    return res.data;
  }
  // 获取首页一级维修选项
  // async getRepairInfo(repairId) {
  //   console.log(repairId);
  //   const res = await this.request({
  //     url: `/star-admin/repairInfo/${repairId}`,
  //   });
  //   return res.data;
  // }
}
