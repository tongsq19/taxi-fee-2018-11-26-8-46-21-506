
## 任务列表


Scenario: 2公里内，起步费6元
Given: 距离等于 0, 停车等待时间等于 0
When: 出租车计价
Then: 返回 6 元

Scenario：超出2公里不到8公里，运价每公里0.8元
Given: 距离等于 3km, 停车等待时间等于 0
When: 出租车计价
Then: 返回 round(6 + 0.8) 元

Scenario: 超出8公里，8公里起会加收50%的每公里运价
Given: 距离等于 9km, 停车等待时间等于 0
When: 出租车计价
Then: 返回 round(6 + 6*0.8 + 1*1.2) 元

Screnario: 停车等待加收每分钟0.25元
Given: 距离等于 0, 停车等待时间等于 2min
When: 出租车计价
Then: 返回 round(6 + 2*0.25) 元
