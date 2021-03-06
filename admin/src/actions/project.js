/*
 * @Author: zhanghongqiao
 * @Date: 2019-09-27 16:52:11
 * @Email: 991034150@qq.com
 * @Description: 项目管理 actions
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-11-22 15:07:29
 */


import {fetch} from '@/utils/request';
import * as types from './types';

// 新增项目成功
const projectAddSuccess = (data) => ({
  type: types.PROJECTADDSUCCESS,
  data,
});

// 查询项目列表成功
const projectListSuccess = (data) => ({
  type: types.PROJECTLISTSUCCESS,
  data,
});

// 删除项目列表成功
const projectDelSuccess = (data) => ({
  type: types.PROJECTDELSUCCESS,
  data,
});

// 更新成功
const projectUpdateSuccess = (data) => ({
  type: types.PROJECTUPDATESUCCESS,
  data,
});

// 详情查询成功
const projectDetailSuccess = (data) => ({
  type: types.PROJECTDETAILSUCCESS,
  data,
});

// 图片上传成功
const projectUploadImgSuccess = (data) => ({
  type: types.PROJECTUPLOADIMGSUCCESS,
  data
});

// 新增项目
export const rquestAddproject = (pramas) => dispatch => fetch('fetchProjectAdd', {...pramas}, (data) => {
  dispatch(projectAddSuccess(data));
});

// 查询项目列表
export const rquestListproject = (pramas) => dispatch => fetch('fetchProjectList', {...pramas}, (data) => {
  dispatch(projectListSuccess(data));
});

// 删除项目列表
export const rquestDelproject = (pramas) => dispatch => fetch('fetchProjectDel', {...pramas}, (data) => {
  dispatch(projectDelSuccess(data));
});

// 编辑（更新）项目
export const rquestUpdateProject = (pramas) => dispatch => fetch('fetchProjectUpdate', {...pramas}, (data) => {
  dispatch(projectUpdateSuccess(data));
});

// 查询详情
export const rquestDetailproject = (pramas) => dispatch => fetch('fetchProjectDetail', {...pramas}, (data) => {
  dispatch(projectDetailSuccess(data));
});

// 图上上传
export const requestUploadimgProject = (pramas) => dispatch => fetch('fetchProjectImgUpload', {...pramas}, (data) => {
  dispatch(projectUploadImgSuccess(data));
});
