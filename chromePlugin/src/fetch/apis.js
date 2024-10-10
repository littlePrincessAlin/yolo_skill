import { fetch } from './axios';

/*
  获取简历记录
  params: {
    (string)cv_id: 页面抓取的简历ID 
  }
  return: {
    code: 200,
    data: {
      (boolean)status: true: 已联系\ false: 未联系
      (array json)remarks: [{
        content: 备注内容,
        created_at: 备注时间
        created_by_: 备注人姓名,
      }],
    }
  }
*/
export const getCVInfo = (params) => {
  return fetch({
    url: '/api/xxx',
    method: 'GET',
    params
  })
}
/*
  更新简历状态
  params: {
    (string)cv_id: 页面抓取的简历ID 
  }
  return: {
    code: 200,
    msg: '更新成功',
  }
*/
export const setCVStatus = (params) => {
  return fetch({
    url: '/api/xxx',
    method: 'POST',
    params
  })
}
/*
  添加备注
  params: {
    (string) cv_id: 页面抓取的简历ID 
    (string) created_by: 备注人姓名
    (string) content: 备注内容
  }
  return: {
    code: 200,
    msg: '添加成功',
  }
*/
export const addRemark = (params) => {
  return fetch({
    url: '/api/xxx',
    method: 'POST',
    params
  })
}