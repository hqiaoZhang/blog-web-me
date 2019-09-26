/*
 * @Author: zhanghongqiao 
 * @Date: 2019-09-26 09:43:26 
 * @Email: 991034150@qq.com 
 * @Description: 文章数据模型
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-09-26 11:44:10
 */
 

const { mongoose } = require('../core/mongodb.js');
const autoIncrement = require('mongoose-auto-increment');

// 文章模型
const articleSchema = new mongoose.Schema({
	// 文章标题
	title: { type: String, required: true, validate: /\S+/ },

	// 文章关键字（SEO）
	keyword: [{ type: String, default: '' }],

	// 作者
	author: { type: String, required: true, validate: /\S+/ },

	// 文章描述
	desc: { type: String, default: '' },

	// 文章内容
	content: { type: String, required: true, validate: /\S+/ },

	// 字数
	numbers: { type: String, default: 0 },

	// 封面图
	// img_url: { type: String, default: '' },

	// 文章类型 => 1: 普通文章，2: 简历，3: 管理员介绍
	// type: { type: Number, default: 1 },

	// 文章发布状态 => 0 草稿，1 已发布
	// state: { type: Number, default: 1 },

	// 文章转载状态 => 0 原创，1 转载，2 混合
	origin: { type: Number, default: 0 },

	// 文章标签
	tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag', required: true }],

	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true }],

	// 文章分类
	// category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }],
	category: { type: String,  required: true },

	// 点赞的用户
	// like_users: [
	// 	{
	// 		// 用户id
	// 		id: { type: mongoose.Schema.Types.ObjectId },

	// 		// 名字
	// 		name: { type: String, required: true, default: '' },

	// 		// 用户类型 0：博主 1：其他用户
	// 		type: { type: Number, default: 1 },

	// 		// 个人介绍
	// 		introduce: { type: String, default: '' },

	// 		// 头像
	// 		avatar: { type: String, default: 'user' },

	// 		// 创建日期
	// 		create_time: { type: Date, default: Date.now },
	// 	},
	// ],

	// // 其他元信息
	// meta: {
	// 	views: { type: Number, default: 0 },
	// 	likes: { type: Number, default: 0 },
	// 	comments: { type: Number, default: 0 },
	// },

	// 创建日期
	create_time: { type: Date, default: Date.now },

	// 最后修改日期
	update_time: { type: Date, default: Date.now },
});

// 自增 ID 插件配置
articleSchema.plugin(autoIncrement.plugin, {
	model: 'Article',
	field: 'id',
	startAt: 1,
	incrementBy: 1,
});

// 文章模型
module.exports = mongoose.model('Article', articleSchema);
