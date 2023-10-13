// JavaScript Document
    function addProvince() {
			var province = document.getElementById("selProvince");
			province.add(new Option("北京市", "北京市", null));
			province.add(new Option("上海市", "上海市", null));
			province.add(new Option("河南省", "河南省", null));
		}
 
		function changeCity() {
			var province = document.getElementById("selProvince").value;
			var city = document.getElementById("selCity");
			city.innerHTML = "";//先清空再赋值
			switch(province) {
				case "北京市":
					city.add(new Option("--选择城市--"));
					city.add(new Option("朝阳区", "朝阳区"), null);
					city.add(new Option("东城区", "东城区"), null);
					city.add(new Option("海淀区", "海淀区"), null);
					break;
				case "上海市":
					city.add(new Option("--选择城市--"));
					city.add(new Option("宝山区", "宝山区"), null);
					city.add(new Option("长宁区", "长宁区"), null);
					city.add(new Option("丰贤区", "丰贤区"), null);
					break;
				case "河南省":
					city.add(new Option("--选择城市--"));
					city.add(new Option("郑州市", "郑州市"), null);
					city.add(new Option("洛阳市", "洛阳市"), null);
					city.add(new Option("安阳市", "安阳市"), null);
					break;
				default:
					city.add(new Option("--选择城市--"));
			}
		}
		window.onload(addProvince());