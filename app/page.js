export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 导航 */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">GoGlobal</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-primary">首页</a>
            <a href="#services" className="hover:text-primary">服务</a>
            <a href="#about" className="hover:text-primary">关于我们</a>
            <a href="#contact" className="hover:text-primary">联系我们</a>
          </nav>
          <a href="#contact" className="bg-primary text-white px-4 py-2 rounded text-sm">
            立即咨询
          </a>
        </div>
      </header>

      {/* 首屏 */}
      <section id="home" className="pt-36 pb-20 relative text-white">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
          <img 
            src="/ocean-freight-shipping.png" 
            alt="海运物流" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              专业海运服务<br />连接全球贸易
            </h1>
            <p className="text-white/90 text-lg">
              整箱FCL、拼箱LCL，全球港口直达，为您提供高效、可靠的国际海运解决方案。
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-white text-primary px-6 py-3 rounded font-medium">获取海运报价</a>
              <a href="#services" className="bg-white/20 text-white px-6 py-3 rounded">了解更多服务</a>
            </div>
          </div>
          <div className="hidden md:block h-72 bg-[url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=container%20terminal%20shipping%20port%20logistics%20operations&image_size=landscape_4_3')] bg-cover rounded-xl shadow-lg"></div>
        </div>
      </section>

      {/* 服务 */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心物流服务</h2>
            <p className="text-slate-600">为外贸企业、跨境电商提供稳定高效的全链路物流</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fa-ship', title: '国际海运', desc: '整箱FCL、拼箱LCL，全球港口直达' },
              { icon: 'fa-plane', title: '国际空运', desc: '全球机场直飞，时效快、轨迹可查' },
              { icon: 'fa-truck', title: '跨境陆运', desc: '中港、中欧、东南亚公路运输' },
              { icon: 'fa-file-text-o', title: '报关清关', desc: '专业报关团队，快速通关，合规省心' },
              { icon: 'fa-archive', title: '仓储配送', desc: '国内外仓储、分拣、打包、代发' },
              { icon: 'fa-shield', title: '货运保险', desc: '全程货物保险，运输更安心' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <i className={`fa ${item.icon} text-3xl text-primary mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于 */}
      <section id="about" className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="h-72 bg-[url('https://picsum.photos/id/1058/800/500')] bg-cover rounded-xl"></div>
          <div>
            <h2 className="text-3xl font-bold mb-4">关于 GoGlobal</h2>
            <p className="text-slate-700 mb-4">GoGlobal 是专业国际货运代理公司，多年物流行业经验，与全球船公司、航空公司长期合作。</p>
            <p className="text-slate-700 mb-6">服务覆盖全球200+国家和地区，提供海运、空运、陆运、报关、仓储、配送全链条服务。</p>
            <div className="flex gap-4">
              <div className="px-3 py-2 bg-white rounded shadow-sm text-center"><div className="text-xl font-bold text-primary">10+</div><div className="text-xs">行业经验</div></div>
              <div className="px-3 py-2 bg-white rounded shadow-sm text-center"><div className="text-xl font-bold text-primary">200+</div><div className="text-xs">覆盖国家</div></div>
              <div className="px-3 py-2 bg-white rounded shadow-sm text-center"><div className="text-xl font-bold text-primary">5000+</div><div className="text-xs">服务客户</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系 */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">联系我们</h2>
            <p className="text-white/80">欢迎咨询报价、定制物流方案，我们将尽快与您联系</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4"><i className="fa fa-phone w-6"></i><div><div>联系电话</div><div className="text-white/80">400-888-9999</div></div></div>
              <div className="flex items-center gap-4"><i className="fa fa-envelope-o w-6"></i><div><div>邮箱</div><div className="text-white/80">service@goglobal.com</div></div></div>
              <div className="flex items-center gap-4"><i className="fa fa-map-marker w-6"></i><div><div>地址</div><div className="text-white/80">深圳市福田区国际物流大厦1008室</div></div></div>
              <div className="flex items-center gap-4"><i className="fa fa-wechat w-6"></i><div><div>微信</div><div className="text-white/80">GoGlobal-01</div></div></div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-4">在线留言</h3>
              <form className="space-y-4">
                <input placeholder="姓名" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white" />
                <input placeholder="电话" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white" />
                <input placeholder="邮箱" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white" />
                <textarea placeholder="留言内容" rows="4" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"></textarea>
                <button type="submit" className="w-full bg-white text-primary py-3 rounded font-medium">提交留言</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-dark text-white/70 py-10 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-white font-semibold text-lg mb-4">GoGlobal</div>
          <p>© 2026 GoGlobal 国际货运代理有限公司 版权所有</p>
        </div>
      </footer>

      {/* 图标库 */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" />
    </main>
  );
}