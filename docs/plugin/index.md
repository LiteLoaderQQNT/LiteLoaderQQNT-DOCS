<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 22:27:33
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-07-04 21:52:41
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
-->
# 配置
## 配置相关
 * 我希望你能把必看的看完，没看完就问，不给予回答，请换个程序用，别找我

# 配置详情
| Key        | 值类型           | 说明  |
| ------------- |:-------------:| -----:|
| real_width | 数值 | 转化后的宽度 |
| real_height | 数值 | 转化后的高度 |
| auto_battle_persistence | 数值 | 是否开启自动战斗 |
| level | 字符串 | 日志等级 |
| github_proxy | 字符串 | github代理 |
| rawgithub_proxy | 字符串 | rawgithub代理 |
| webhook_url | 字符串 | 未知 |
| start | 布尔值 | 是否首次启动 |
| temp_version | 数值 | 未知 |
| star_version | 数值 | 未知 |
| open_map | 字符串 | 打开地图的按键 |
| adb | 字符串 | ADB的IP:端口 |
| presets | 列表 | 队伍预设 |
| map_version | 数值 | 未知 |
| proxies | 字符串 | 网络代理 |
| language | 字符串 | 语言 |
| move_excursion | 数值 | 移动偏移 |
| move_division_excursion | 数值 | 移动偏移倍数 |
| sprint | 布尔值 | 是否疾跑 |
| join_time | [查看详细](#进图最大时间) | 进图最大时间 |
| deficiency | 布尔值 | 是否捡漏 |


## 完整配置参考
```json5
{
    "real_width": 0,
    "auto_battle_persistence": 0,
    "real_height": 0,
    "level": "INFO",
    "github_proxy": "",
    "rawgithub_proxy": "",
    "webhook_url": "",
    "start": true,
    "temp_version": "0",
    "star_version": "0",
    "open_map": "m",
    "adb": "127.0.0.1:62001",
    "presets": [
        [
            "丹恒",
            "火主",
            "姬子",
            "娜塔莎"
        ]
    ],
    "map_version": "0",
    "proxies": "socks5://your_socks5_proxy",
    "language": "zh_CN",
    "move_excursion": 0
}
```
**PS: 参考配置请不要直接复制使用，程序会自动生成，这只是给一个模板**

## 进图最大时间
| Key        | 值类型           | 说明  |
| ------------- |:-------------:| -----:|
| pc | 数值 | PC进图最大时间 |
| mnq | 数值 | 模拟器进图最大时间 |
```json
{
    "join_time": {
        "pc": 8,
        "mnq": 15
    }
}
```
