const mockData = {
  dispatchData: {
    xAxis: ["01", "02", "03", "04", "05", "06"],
    legend: ["运单", "派车单", "调度单"],
    data: {
      trans: [11, 84, 139, 105, 201, 196],
      dispatch: [17, 123, 211, 116, 175, 153],
      vehicle: [21, 156, 149, 183, 150, 202],
    },
  },
  dispatchList: [{
      id: 0,
      vehicleReport: 20,
      vehicleList: 12,
      receive: 12300,
      material: '钢材1',
      startAddr: '福州鼓楼区',
      endAddr: '福州台江区',
    },
    {
      id: 1,
      vehicleReport: 10,
      vehicleList: 8,
      receive: 10300,
      material: '钢材2',
      startAddr: '福州鼓楼区',
      endAddr: '福州台江区',
    },
    {
      id: 2,
      vehicleReport: 220,
      vehicleList: 122,
      receive: 42300,
      material: '钢材3',
      startAddr: '福州鼓楼区',
      endAddr: '福州台江区',
    },
  ],
  dispatchDetail: {
    list: [
      {
        dispatchDate: '2021.08.01',
        vehicleCode: '闽A111111',
        driver: '张三丰',
        waybill: 50,
        receive: 1240
      },
      {
        dispatchDate: '2021.08.01',
        vehicleCode: '闽A111111',
        driver: '张三丰',
        waybill: 50,
        receive: 1240
      },
      {
        dispatchDate: '2021.08.01',
        vehicleCode: '闽A111111',
        driver: '张三丰',
        waybill: 50,
        receive: 1240
      }
    ]
  },
  // 统计报表数据
  //运输统计
  transData: {
    xAxis: ["8-1", "8-2", "8-3", "8-4", "8-5", "8-6"],
    legend: ["已接单", "已出车", "已回车"],
    data: {
      accept: [201, 184, 189, 205, 171, 196],
      out: [187, 153, 181, 166, 155, 193],
      back: [121, 116, 149, 153, 150, 182],
    },
    dayData: [289, 263, 252],
  },
  //运费统计
  carriageData: {
    xAxis: ["01", "02", "03", "04", "05", "06"],
    legend: ["待收款", "已收款"],
    data: {
      receipts: [157, 113, 181, 136, 175, 153],
      collected: [101, 96, 149, 103, 150, 122],
    },
    dayData: [181, 149],
  },
  //效益列表
  effectList: [
    {
      id: 0,
      vehicleCode: '闽A223456',
      collected: 60000,
      vehicleNums: 512
    },
    {
      id: 1,
      vehicleCode: '闽A335456',
      collected: 50000,
      vehicleNums: 412
    },
    {
      id: 2,
      vehicleCode: '闽A666456',
      collected: 40000,
      vehicleNums: 312
    },
  ],
  //车辆效益
  vehicleEffect: [
	{
	  id: 0,
	  vehicleCode: '闽A223456',
	  type: '重卡',
	  baseLoad: 40,
	  load: 234,
	  mileage: 234123,
	  collected: 314543,
	  vehicleNums: 512
	},
	{
	  id: 1,
	  vehicleCode: '闽A335456',
	  type: '重卡',
	  baseLoad: 40,
	  load: 234,
	  mileage: 234123,
	  collected: 314543,
	  vehicleNums: 412
	},
	{
	  id: 2,
	  vehicleCode: '闽A666456',
	  type: '重卡',
	  baseLoad: 40,
	  load: 234,
	  mileage: 234123,
	  collected: 314543,
	  vehicleNums: 312
	},
  ],
  
  //运费报表
  carriageList: [
    {
      date: '9月1日',
      accept: 201,
      out: 187,
      back: 121
    },
    {
      date: '9月2日',
      accept: 184,
      out: 153,
      back: 114
    },
    {
      date: '9月3日',
      accept: 189,
      out: 181,
      back: 149
    },
  ]
}
export default mockData;