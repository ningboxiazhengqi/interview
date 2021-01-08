"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./utils/network/index");
App({
    globalData: {
        newYuan_Url: 'https://p.utbon.com:8080',
        ipx: false,
    },
    onLaunch: function () {
        var that = this;
        var arr = {
            'a': 1, 'b': 1
        };
        console.log(arr.a);
        this.globalData.request = index_1.default;
        wx.getSystemInfo({
            success: function (res) {
                if (res.model.match("iPhone") && res.model.match("X")) {
                    that.globalData.ipx = true;
                }
                var menuButtonObject = wx.getMenuButtonBoundingClientRect();
                var statusBarHeight = res.statusBarHeight, navTop = menuButtonObject.top, navHeight = navTop - statusBarHeight + navTop + menuButtonObject.height;
                that.globalData.navHeight = navHeight;
                that.globalData.navTop = navTop;
                that.globalData.windowHeight = res.windowHeight;
                that.globalData.statusBarHeight = statusBarHeight;
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTZDO0FBRzdDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsR0FBRyxFQUFDLEtBQUs7S0FDVjtJQUNELFFBQVE7UUFDTixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxHQUFHLEdBQUk7WUFDVCxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBR2xCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLGVBQVMsQ0FBQztRQUNwQyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO2lCQUMzQjtnQkFFRCxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUM1RCxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsZUFBZSxFQUN2QyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUM3QixTQUFTLEdBQUcsTUFBTSxHQUFHLGVBQWUsR0FBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1lBRXBELENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdYcmVxdWVzdCBmcm9tICcuL3V0aWxzL25ldHdvcmsvaW5kZXgnXG5cbi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge1xuICAgIG5ld1l1YW5fVXJsOiAnaHR0cHM6Ly9wLnV0Ym9uLmNvbTo4MDgwJyxcbiAgICBpcHg6ZmFsc2UsXG4gIH0sXG4gIG9uTGF1bmNoKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgbGV0IGFycjp7fT17XG4gICAgICAnYSc6MSwnYic6MVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhcnIuYSlcblxuICAgIC8v5YWo5bGA6K+35rGCXG4gICAgdGhpcy5nbG9iYWxEYXRhLnJlcXVlc3QgPSBXWHJlcXVlc3Q7XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgaWYgKHJlcy5tb2RlbC5tYXRjaChcImlQaG9uZVwiKSAmJiByZXMubW9kZWwubWF0Y2goXCJYXCIpKSB7XG4gICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLmlweCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvL+WvvOiIqumrmOW6plxuICAgICAgICBsZXQgbWVudUJ1dHRvbk9iamVjdCA9IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHN0YXR1c0JhckhlaWdodCA9IHJlcy5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICAgICAgbmF2VG9wID0gbWVudUJ1dHRvbk9iamVjdC50b3AsXG4gICAgICAgICAgbmF2SGVpZ2h0ID0gbmF2VG9wIC0gc3RhdHVzQmFySGVpZ2h0ICsgIG5hdlRvcCArIG1lbnVCdXR0b25PYmplY3QuaGVpZ2h0O1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEubmF2SGVpZ2h0ID0gbmF2SGVpZ2h0O1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEubmF2VG9wID0gbmF2VG9wO1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCA9IHN0YXR1c0JhckhlaWdodDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhtZW51QnV0dG9uT2JqZWN0KVxuICAgICAgfSxcbiAgICB9KVxuXG4gIH0sXG59KSJdfQ==