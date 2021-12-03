/*
 * @Author: your name
 * @Date: 2021-04-01 10:17:50
 * @LastEditTime: 2021-05-08 09:49:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exclusive-cloud-admin\resource\vue.config.js
 */
const { name } = require('./package.json')
const webpack = require('webpack');

module.exports = {
  transpileDependencies: ['common'],
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    },
    plugins: []
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
