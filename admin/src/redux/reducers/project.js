/*
 * @Author: zhanghongqiao
 * @Date: 2019-09-24 17:46:21
 * @Email: 991034150@qq.com
 * @Description: 项目管理reducers
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-11-22 14:57:18
 */


import * as types from '@/actions/types';

const initialState = {
  projectList: [],
  status: 0,
  imageurl: '',
  detail: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.PROJECTLISTSUCCESS: // 登录成功
      return Object.assign({}, state, {
        projectList: action.data,
        status: 0,
      });
    case types.PROJECTDELSUCCESS: // 删除
    case types.PROJECTADDSUCCESS: // 新增
    case types.PROJECTUPDATESUCCESS: // 更新
      return Object.assign({}, state, {
        status: action.data.code
      });
    case types.UPDATEPROSTATUS:
      return Object.assign({}, state, {
        status: action.code
      });
    case types.PROJECTDETAILSUCCESS: // 查询详情
      return Object.assign({}, state, {
        detail: action.data
      });
    case types.PROJECTUPLOADIMGSUCCESS: // 图片上传成功
      return Object.assign({}, state, {
        imageurl: action.data.url
      });
    default:
      return state;
  }
}
