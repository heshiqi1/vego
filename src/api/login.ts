import {customRequest} from '../utils/request'
import { ElMessage } from 'element-plus'

export const login = async (data: {username: string, password: string}) => {
  try {
    const res = await customRequest(
      '/Admin/login',
      'post',
      data,
      'https://cspdemo.xtalpi.xyz'
    )
    console.log('请求成功login', res)
  } catch (error: any) {
    setTimeout(() => {
      ElMessage('请求失败', error)
    }, 1000)
  }
}