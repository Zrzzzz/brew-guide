import { Stage } from "@/lib/config";

export interface TasteRatings {
	acidity: number;
	sweetness: number;
	bitterness: number;
	body: number;
}

// 咖啡豆数据模型
export interface CoffeeBean {
	id: string;
	name: string;
	image?: string; // 图片URL或Base64
	price?: string; // 价格
	capacity: string; // 总容量
	remaining: string; // 剩余容量
	roastLevel?: string; // 烘焙程度
	roastDate?: string; // 烘焙日期
	flavor?: string[]; // 风味描述
	origin?: string; // 产地
	process?: string; // 处理法
	variety?: string; // 品种
	type?: string; // 类型
	notes?: string; // 备注
	timestamp: number; // 创建/添加时间
	startDay?: number; // 养豆期结束天数
	endDay?: number; // 最佳赏味期结束天数
	maxDay?: number; // 赏味期结束天数
	blendComponents?: Array<{
		name: string; // 成分豆名称
		percentage: number; // 百分比 (1-100)
		origin?: string; // 产地
		process?: string; // 处理法
		variety?: string; // 品种
	}>; // 拼配组成成分
}

// 修改 BrewingNoteData 接口，避免使用 any
export interface BrewingNoteData {
	id: string;
	timestamp: number;
	equipment?: string;
	method?: string;
	params?: {
		coffee: string;
		water: string;
		ratio: string;
		grindSize: string;
		temp: string;
	};
	stages?: Stage[];
	totalTime?: number;
	coffeeBeanInfo: {
		name: string;
		roastLevel: string;
		roastDate?: string;
	};
	rating: number;
	taste: TasteRatings;
	notes: string;
	[key: string]: unknown; // 使用 unknown 代替 any
}
