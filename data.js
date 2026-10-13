// ============================================================
//  课表数据 · 直接编辑本文件即可，无需改动 index.html
// ============================================================
//  已录入 4 人：吴奇乐、李佳音、姚骁航、相怡帆（2026-2027-1 学期）
//  要加人：复制 people 里任意一个对象，改 name / color / courses 即可。
// ============================================================

window.SCHEDULE_DATA = {

  // 学期名称（显示在页面标题右侧）
  semester: "2026-2027学年 第一学期",

  // 本学期总周数（校历共 22 周；理论课到第 18 周，19-22 周为考试/无课）
  totalWeeks: 22,

  // 打开页面时默认显示的周
  defaultWeek: 1,

  // 星期（列）。一般不用改。
  days: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],

  // 节次（行）。periods 是该行覆盖的“第几节”，label/time 用于显示。
  // 时间按中南大学官方作息时间表校准。
  slots: [
    { periods: [1, 2],   label: "1-2节",   time: "08:00-09:40" },
    { periods: [3, 4],   label: "3-4节",   time: "10:00-11:40" },
    { periods: [5, 6],   label: "5-6节",   time: "14:00-15:40" },
    { periods: [7, 8],   label: "7-8节",   time: "16:00-17:40" },
    { periods: [9, 10],  label: "9-10节",  time: "19:00-20:40" }
  ],

  // ---------- 每个人的课表 ----------
  // 字段说明：
  //   name       课程名
  //   day        星期几：1-7（1=周一）
  //   periods    节次区间：[起始节, 结束节]
  //   weeks      上课周次（写法见文件底部说明）
  //   teacher / location  老师、教室（选填）
  people: [
    {
      name: "吴奇乐",
      color: "#4f8ef7",
      courses: [
        { name: "工程流体力学", day: 1, periods: [1, 2],  weeks: "9,12-18", teacher: "王家斌、杨明智", location: "世A104" },
        { name: "机车车辆工程", day: 1, periods: [3, 4],  weeks: "4-9,12-18", teacher: "张书增、汪馗", location: "世A104" },
        { name: "机械设计基础A", day: 1, periods: [5, 6], weeks: "1-9,12-18", teacher: "颜海燕",      location: "世B101" },
        { name: "积分变换",     day: 1, periods: [7, 8],  weeks: "7-9,12-14", teacher: "伍钒、钱博森", location: "世B102" },
        { name: "互换性与技术测量", day: 1, periods: [9, 10], weeks: "1-8",    teacher: "彭华建",      location: "世主308" },
        { name: "机车车辆工程", day: 2, periods: [3, 4],  weeks: "4-9,12-18", teacher: "张书增、汪馗", location: "世A104" },
        { name: "积分变换",     day: 2, periods: [7, 8],  weeks: "7-9,12-14", teacher: "伍钒、钱博森", location: "世B102" },
        { name: "大学生健康教育", day: 2, periods: [9, 10], weeks: "3-18",     teacher: "田飒",        location: "世B201" },
        { name: "工程流体力学", day: 3, periods: [3, 4],  weeks: "9,12-18", teacher: "王家斌、杨明智", location: "世A104" },
        { name: "互换性与技术测量", day: 3, periods: [9, 10], weeks: "1-8",    teacher: "彭华建",      location: "世主308" },
        { name: "机车车辆工程", day: 3, periods: [9, 10], weeks: "17-18",    teacher: "张书增、汪馗", location: "世A102" },
        { name: "机械设计基础A", day: 4, periods: [1, 2],  weeks: "1-9,12-18", teacher: "颜海燕",      location: "世B102" },
        { name: "形势与政策",   day: 4, periods: [3, 4],  weeks: "9,13",      teacher: "傅建平",      location: "世B201" },
        { name: "控制工程基础", day: 4, periods: [3, 4],  weeks: "1-8",       teacher: "李蔚",        location: "世主407" },
        { name: "铁路运输组织", day: 4, periods: [5, 6],  weeks: "1-4",       teacher: "刘宏康、甘宁", location: "世A104" },
        { name: "改革开放史",   day: 4, periods: [7, 8],  weeks: "11-18单",   teacher: "李淼磊",      location: "世A105" },
        { name: "毛泽东思想和中国特色社会主义理论体系概论", day: 5, periods: [3, 4], weeks: "1-9,12-18", teacher: "王稳良", location: "世B201" },
        { name: "控制工程基础", day: 5, periods: [5, 6],  weeks: "1-8",       teacher: "李蔚",        location: "世主407" },
        { name: "铁路运输组织", day: 5, periods: [9, 10], weeks: "1-4",       teacher: "刘宏康、甘宁", location: "世A104" }
      ]
    },

    {
      name: "李佳音",
      color: "#f0a63a",
      courses: [
        { name: "测试技术与信号处理", day: 1, periods: [1, 2],  weeks: "1-8",       teacher: "肖友刚",      location: "世A103" },
        { name: "测试技术与信号处理", day: 2, periods: [1, 2],  weeks: "1-8",       teacher: "肖友刚",      location: "世A203" },
        { name: "机械设计基础A",   day: 4, periods: [1, 2],  weeks: "1-9,12-18", teacher: "颜海燕",      location: "世B102" },
        { name: "中国共产党的历史", day: 5, periods: [1, 2],  weeks: "11-18单",   teacher: "王翔",        location: "世B502" },
        { name: "机车车辆工程",     day: 1, periods: [3, 4],  weeks: "4-9,12-18", teacher: "汪馗、张书增", location: "世A104" },
        { name: "机车车辆工程",     day: 2, periods: [3, 4],  weeks: "4-9,12-18", teacher: "汪馗、张书增", location: "世A104" },
        { name: "形势与政策",       day: 4, periods: [3, 4],  weeks: "9,13",      teacher: "傅建平",      location: "世B201" },
        { name: "控制工程基础",     day: 4, periods: [3, 4],  weeks: "1-8",       teacher: "李蔚",        location: "世主407" },
        { name: "毛泽东思想和中国特色社会主义理论体系概论", day: 5, periods: [3, 4], weeks: "1-9,12-18", teacher: "王稳良", location: "世B201" },
        { name: "机械设计基础A",   day: 1, periods: [5, 6],  weeks: "1-9,12-18", teacher: "颜海燕",      location: "世B101" },
        { name: "互换性与技术测量", day: 2, periods: [5, 6],  weeks: "1-8",       teacher: "李蔚",        location: "世主405" },
        { name: "铁路运输组织",     day: 4, periods: [5, 6],  weeks: "1-4",       teacher: "甘宁、刘宏康", location: "世A104" },
        { name: "控制工程基础",     day: 5, periods: [5, 6],  weeks: "1-8",       teacher: "李蔚",        location: "世主407" },
        { name: "积分变换",         day: 1, periods: [7, 8],  weeks: "7-9,12-14", teacher: "伍钒、钱博森", location: "世B102" },
        { name: "积分变换",         day: 2, periods: [7, 8],  weeks: "7-9,12-14", teacher: "伍钒、钱博森", location: "世B102" },
        { name: "互换性与技术测量", day: 5, periods: [7, 8],  weeks: "1-8",       teacher: "李蔚",        location: "世主304" },
        { name: "机车车辆工程",     day: 3, periods: [9, 10], weeks: "17-18",    teacher: "汪馗、张书增", location: "世A102" },
        { name: "铁路运输组织",     day: 5, periods: [9, 10], weeks: "1-4",      teacher: "甘宁、刘宏康", location: "世A104" }
      ]
    },

    {
      name: "姚骁航",
      color: "#35c08f",
      courses: [
        { name: "测试技术与信号处理", day: 1, periods: [1, 2], weeks: "1-8",       teacher: "谢劲松",      location: "世B104" },
        { name: "工程流体力学",     day: 1, periods: [1, 2], weeks: "9,12-18",   teacher: "王家斌、杨明智", location: "世A104" },
        { name: "测试技术与信号处理", day: 2, periods: [1, 2], weeks: "1-8",       teacher: "谢劲松",      location: "世B104" },
        { name: "机械设计基础A",   day: 4, periods: [1, 2], weeks: "1-9,12-18", teacher: "颜海燕",      location: "世B102" },
        { name: "机车车辆工程",     day: 1, periods: [3, 4], weeks: "4-9,12-18", teacher: "汪馗、张书增", location: "世A104" },
        { name: "机车车辆工程",     day: 2, periods: [3, 4], weeks: "4-9,12-18", teacher: "汪馗、张书增", location: "世A104" },
        { name: "工程流体力学",     day: 3, periods: [3, 4], weeks: "9,12-18",   teacher: "王家斌、杨明智", location: "世A104" },
        { name: "形势与政策",       day: 4, periods: [3, 4], weeks: "9,13",      teacher: "傅建平",      location: "世B201" },
        { name: "控制工程基础",     day: 4, periods: [3, 4], weeks: "1-8",       teacher: "李蔚",        location: "世主407" },
        { name: "毛泽东思想和中国特色社会主义理论体系概论", day: 5, periods: [3, 4], weeks: "1-9,12-18", teacher: "王稳良", location: "世B201" },
        { name: "机械设计基础A",   day: 1, periods: [5, 6], weeks: "1-9,12-18", teacher: "颜海燕",      location: "世B101" },
        { name: "铁路运输组织",     day: 4, periods: [5, 6], weeks: "1-4",       teacher: "甘宁、刘宏康", location: "世A104" },
        { name: "控制工程基础",     day: 5, periods: [5, 6], weeks: "1-8",       teacher: "李蔚",        location: "世主407" },
        { name: "改革开放史",       day: 5, periods: [5, 6], weeks: "11-18单",   teacher: "李江浩",      location: "C座503" },
        { name: "积分变换",         day: 1, periods: [7, 8], weeks: "7-9,12-14", teacher: "伍钒、钱博森", location: "世B102" },
        { name: "积分变换",         day: 2, periods: [7, 8], weeks: "7-9,12-14", teacher: "伍钒、钱博森", location: "世B102" },
        { name: "健康心理学",       day: 2, periods: [9, 10], weeks: "3-18",     teacher: "彭立静",      location: "B座207" },
        { name: "机车车辆工程",     day: 3, periods: [9, 10], weeks: "17-18",    teacher: "汪馗、张书增", location: "世A102" },
        { name: "铁路运输组织",     day: 5, periods: [9, 10], weeks: "1-4",      teacher: "甘宁、刘宏康", location: "世A104" }
      ]
    },

    {
      name: "相怡帆",
      color: "#f26d6d",
      courses: [
        { name: "制造工程训练C", day: 5, periods: [1, 2], weeks: "3-18", teacher: "多位教师", location: "" },
        { name: "创新创业与工程导论", day: 1, periods: [3, 4], weeks: "11-18", teacher: "刘一顺", location: "B座517" },
        { name: "信号处理与系统分析", day: 2, periods: [3, 4], weeks: "11-18", teacher: "余浩洋", location: "B座207" },
        { name: "信号处理与系统分析", day: 2, periods: [3, 4], weeks: "3-10",  teacher: "余浩洋", location: "D座203" },
        { name: "创新创业与工程导论", day: 3, periods: [3, 4], weeks: "11-18", teacher: "刘一顺", location: "B座512" },
        { name: "信号处理与系统分析", day: 4, periods: [3, 4], weeks: "11-18", teacher: "余浩洋", location: "B座208" },
        { name: "人工智能导论",       day: 4, periods: [3, 4], weeks: "1-8",   teacher: "汪运",   location: "B座511" },
        { name: "制造工程训练C",     day: 5, periods: [3, 4], weeks: "3-18",  teacher: "多位教师", location: "" },
        { name: "毛泽东思想和中国特色社会主义理论体系概论", day: 1, periods: [5, 6], weeks: "3",    teacher: "李淼磊", location: "A座201" },
        { name: "毛泽东思想和中国特色社会主义理论体系概论", day: 1, periods: [5, 6], weeks: "4-18", teacher: "刘珺",   location: "A座201" },
        { name: "先进检测技术与仪表", day: 2, periods: [5, 6], weeks: "1,3-8", teacher: "韩洁",   location: "B座402" },
        { name: "先进检测技术与仪表", day: 2, periods: [5, 6], weeks: "2",     teacher: "凌玉华", location: "B座402" },
        { name: "形势与政策",         day: 1, periods: [7, 8], weeks: "7,11",  teacher: "周杰",   location: "B座112" },
        { name: "现代控制理论",       day: 2, periods: [7, 8], weeks: "11-18", teacher: "徐德刚", location: "B座501" },
        { name: "人工智能导论",       day: 2, periods: [7, 8], weeks: "1-8",   teacher: "汪运",   location: "B座101" },
        { name: "现代控制理论",       day: 4, periods: [7, 8], weeks: "11-18", teacher: "徐德刚", location: "B座501" },
        { name: "先进检测技术与仪表", day: 4, periods: [7, 8], weeks: "1,3-8", teacher: "韩洁",   location: "B座511" },
        { name: "先进检测技术与仪表", day: 4, periods: [7, 8], weeks: "2",     teacher: "凌玉华", location: "B座511" },
        { name: "EDA技术与应用",      day: 5, periods: [7, 8], weeks: "3-10",  teacher: "樊欣宇", location: "B座511" },
        { name: "中国文学经典与中国精神", day: 2, periods: [9, 10], weeks: "3-18", teacher: "唐苗",   location: "B座314" },
        { name: "EDA技术与应用",      day: 3, periods: [9, 10], weeks: "3-10",  teacher: "樊欣宇", location: "B座518" }
      ]
    }
  ]
};

// ============================================================
//  weeks（上课周次）写法说明：
//    "1-16"         第1到16周
//    "1-8,10-16"    多段（逗号/顿号分隔）
//    "1-16单"       单周（1,3,5...15），也可写 "1-16单周"
//    "1-16双"       双周（2,4,6...16），也可写 "1-16双周"
//    "2,4,6,8"      直接列出周次
//    ""（留空）     表示每周都有
//
//  无固定节次的补充事项（未列入表格）：
//    吴奇乐：认识实习 第10-11周；体育课外测试(一) 第1-9、12-18周
//    姚骁航：认识实习 潘彤阳、张书增 第10-11周
//    李佳音：认识实习 潘彤阳、张书增 第10-11周
//    相怡帆：EDA技术与应用课程设计 樊欣宇 第18、21周
// ============================================================
