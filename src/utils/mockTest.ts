import Mock from "mockjs";
import URLs from "./urls";
let R = Mock.Random;
let content = `
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-42fe5f887b787f24.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></p>
  <h2 id="#toc21">1. 前言</h2>
  <p>笔者做前端开发这些年，几乎每天都会刷 GitHub，也时不时在上面分享博客和做一些开源项目，也算是 GitHub 的重度使用者了，其中也掌握了一定的技巧，并在一年内收获了 <strong>2000+</strong> Star。</p>
  <p>因为有读者问过我，想知道我在 GitHub 上做开源项目并获得 <strong>2000+</strong> Star 的心得，所以笔者在此分享一下这过程的一些经验与心得，算是给那些关注了我的读者的福利。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-ebdbdd22391a2540.gif?imageMogr2/auto-orient/strip" alt=""></p>
  <h2 id="#toc22">2. 为什么要经营好你的 GitHub ？</h2>
  <p>GitHub 可以说是你的技术名片，你在 GitHub 的贡献可以作为简历的加分项。</p>
  <p>据我所知，对于技术岗位，猎头在找候选人的诸多方法中，有一条就是通过 GitHub 来找技术比较好的候选人的，如果你的 GitHub 经营得很好，开源项目收获的 Star 比较多，一般都会为你提供一些好的机会。</p>
  <p>为什么笔者知道 ？因为 ta 们找过笔者，所以我知道，哈哈哈。</p>
  <p>而且如果某个公司的团队负责人看到你的 GitHub，觉得你的技术不错，也会给你抛来招揽的橄榄枝。这种情况，笔者也遇到过，哈哈哈。</p>
  <p>笔者也是最近裸辞并换了工作，最近在找工作过程中，笔者知道了：想通过社招获得好工作或者进大厂，一般都要有如下 4 点中的 1 - 2 个亮点才行。</p>
  <ul>
  <li>高学历，名校毕业</li>
  <li>工作年限足，经验丰富（但不是 1 年经验当 5 年用那种）</li>
  <li>有开源与影响力，GitHub 的贡献或者经常写优质博客</li>
  <li>本身就有大厂的工作经历</li>
  </ul>
  <p>大多数人都是普通人，平时所做工作几乎都是写业务而已，那么只有你具备 1 - 2 个亮点，HR 或者面试官 在筛选简历时，才会选中你，或者好机会才会自动找上你。</p>
  <p>找工作时，我简历中的亮点就是 GitHub 的贡献，在开源与影响力的一栏中，我是这样写的：</p>
  <blockquote>
  <h4 id="#toc43">开源与影响力</h4>
  <ul>
  <li>GitHub： <a href="https://github.com/biaochenxuying"><strong>https://github.com/biaochenxuying</strong></a> 。</li>
  <li>本人有 <strong>写技术博客和做开源项目</strong> 的习惯，<strong>乐于分享</strong>，坚持写博客和做开源项目的时间长达 <strong>一年半</strong>。</li>
  <li>利用业余时间开源和维护了 <strong>10</strong> 个个人项目，有 博客文章、Vue 源码的思维导图、Vue 版的博客网站前台、React 管理后台、Express 后台、还有一些 js 轮子。</li>
  <li>GitHub 上总共收获 <strong>2000+</strong> Star，<strong>500+</strong> Fork ，<strong>570+</strong> Followers；超过 <strong>100</strong> star 的项目有 <strong>6</strong> 个，超过 <strong>500</strong> star 的项目有 <strong>1</strong> 个。</li>
  </ul>
  </blockquote>
  <p>如果没有这个亮点，估计在这互联网寒冬期间，笔者也很难有好公司的面试机会或者找到工作啊。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-3d5f7eab1ea6bb27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></p>
  <h2 id="#toc24">3. 如何经营好你的 GitHub ?</h2>
  <blockquote>
  <p>你能为他人提供什么样的价值。</p>
  </blockquote>
  <p>想收获到很多小星星，那你首先要想的是：<strong>你能为他人提供什么样的价值</strong>。</p>
  <p>就笔者来说，笔者在 GitHub 上为他人提供的价值有：</p>
  <ul>
  <li>写的博客文章，他人可以从中吸取到 经验、知识点，或者思维得到提升；</li>
  <li>把相关知识总结成思维导图，分享出来，他人可以直接学习；</li>
  <li>把根据自己的兴趣，做了个博客网站，并把源码分享出来，并做了开源，别人可以直接用；</li>
  <li>自己工作中造的一些轮子，也分享出来，他人可以直接用。</li>
  </ul>
  <p>总之，原则就是：<strong>你能提供的价值越大越多，收获到的小星星就会越多</strong>。</p>
  <h3 id="#toc35">3.1 写博客文章</h3>
  <p>至于为什么要写博客，我就不说了，很多大神已经写过了，可以参考一下几个大佬们写的 <a href="https://segmentfault.com/a/1190000009781697#articleHeader2">我为什么要写博客 ？</a></p>
  <p>笔者只想说，<strong>只要你开始了写博客之路，那基本就是一条一去不回头的路了</strong>。因为笔者就是这样，而且我看到很多写博客的人也是这样。</p>
  <p>还有就是最好用 markdown 语法来写作，也可以参考阮一峰写的 <a href="https://github.com/ruanyf/document-style-guide">中文技术文档的写作规范</a>，这样可以更加关注内容本身，而不是样式，多个平台也可以发布。</p>
  <p>而且写作这是非常重要的一环，因为后面介绍的方法，多多少少都依赖于写作。</p>
  <p>笔者专门在 GitHub 上创建了一个 blog 仓库来写文章的，也是目前笔者收获最多 Star 的开源项目，而且布局和风格什么的，都是比较正规的。如果你也想创建个仓库专门来写文章的，可以参考我这个 <a href="https://github.com/biaochenxuying/blog">blog</a>  项目。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-0f628f325ed62b96.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></p>
  <h3 id="#toc36">3.2 做开源项目</h3>
  <p>可能你觉得自己的代码写的不好，没有什么流弊的功能，不敢开源代码之类的，这想法也没错，但你要知道，<strong>大神都是从小白过来的，每个人都有是小白的时候</strong>。</p>
  <p>而且后来者从来都不缺，很多时候，你的分享主要是对那些后来者有用而已；更何况，比你厉害的人可能会指出你分享中的错误或者改进的地方，也是能促进你的进步的。</p>
  <p>这个开源项目类型可以是很多种的，有造轮子的、写插件的、高仿某个 app 或者网站的、用某些技术写个通用模版的、总结知识做成思维导图的、提供某个功能的 等等。</p>
  <p>虽然类型那么多，最主要的是：<strong>要根据自身的兴趣和平时日常工作来选择要做哪种类型的开源项目</strong>。</p>
  <p>笔者因为平时有写博客，所以想做个自己的个人网站，专门来展示自己的文章的，而且当时想学习 react 和 node ，所以做了个网站的项目并开源了，包含 <a href="https://github.com/biaochenxuying/blog-react">前台展示</a>、<a href="https://github.com/biaochenxuying/blog-react-admin">管理后台</a>、<a href="https://github.com/biaochenxuying/blog-node">后台</a>。</p>
  <p>还有一些开源项目是笔者在工作中造的轮子或者插件（ps：如果是公司的机密项目的轮子、插件之类，又或者公司声明了不能把代码外传的，不要随意开源哦）。</p>
  <p>我是这样想的：既然自己有这样的需求（比如：做个自己的个人网站需求），那么同理，其他人可能也有这个需求的，所以我做好功能并开源，对他人就可能有帮助。</p>
  <p>我开源了之后，也的确给不少人提供了经验或者帮助，因为这个项目，笔者收获了很多的小星星。而且很多人是伸手党来的，你做好了，别人可以直接用，多方便啊。</p>
  <p>还有一个项目就是 <a href="https://github.com/biaochenxuying/blog-vue-typescript">vue + typescript</a> 版的博客前台展示，当时我已经写了一版 react 版的前台展示了，为什么还写一版 vue 版的呢 ？因为我想学习 typescirpt，所以想在结合 vue 来实践一下，而工作中还没用得上，所以又把我的网站前台展示用 vue + typescript 用了一版。</p>
  <p>而且当时 typescript 加 vue 的开源项目还很少的，连相关的博客都少，我想参考一下别人的项目，但是没有啊，所以当时也踩了很多坑。所以我想：我如果开源了的话，肯定很多人会参考我这个项目的，也会带来一定的流量，所以能收获不少的 star 。也的确是这样，这个项目也是我目前的完整项目中最多 star 的一个。</p>
  <p>有一点要注意的是：<strong>一个人的精力与业余时间是非常有限的。如果是一个人的话，做的开源项目不要太多吧，维护好一个开源项目是很需要时间的，维护多个项目所需要的时间就更多了</strong>。</p>
  <p>你以为开源了就行了吗 ？太天真了。</p>
  <p>那要写 README.md 来介绍你开源的项目的，比如一般要有如下内容：</p>
  <ul>
  <li>简介：简单说明一下这个项目是干嘛的</li>
  <li>结果：这个项目的代码达到了什么效果</li>
  <li>步骤：怎么运行你这个项目，或者怎么使用你写的插件。</li>
  <li>文章：详细讲解这个项目（可无，最好有）</li>
  </ul>
  <p>有了这个 README.md 之后，别人一看到你的项目的 github 就知道这个项目的情况了。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-83ab89220f0602a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></p>
  <h3 id="#toc37">3.3 硬核为王</h3>
  <blockquote>
  <p>以做好一个伟大的产品的心态来做开源项目。</p>
  </blockquote>
  <p>做开源项目说白了就是做一个产品，我们要以做好一个产品的心态来做开源项目，这样你的产品质量才会更优，才会够硬核，也就是有料。</p>
  <p>我做这个博客网站的时候是有这个意识的，做完第一版之后，也在不断的迭代和完善。</p>
  <p>就我做成的成果来看，其实还不够硬核，因为还有一些优化的点和实用的功能的，只是我还没做。</p>
  <p>目前，笔者比较遗憾的是：还没有一个达到 1000+ Star、甚至 10000+ Star 的硬核开源项目。以后技术更精进了，或者有好想法了，再开源一个好的开源项目吧。</p>
  <p>我知道的一个比较硬核的开源项目是这个：<a href="https://github.com/mdnice/markdown-nice">支持自定义样式的 Markdown 编辑器</a>，这个项目就是以一个产品的理念来做的，作者也在不断的迭代和完善。而且更新的速度很快，也很规范。</p>
  <p>当然你也可以参考那些做得很出名的开源项目，毕竟做得那么成功，肯定有其原因。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-60f9011a339f48b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></p>
  <h3 id="#toc38">3.4 时间与坚持</h3>
  <p>做开源项目是很需要时间的。</p>
  <p>比如笔者做的博客网站项目就用了 2 个多月的业余时间来做，还好公司的正常的上班时间是 965 的，平时上班只需要 7 个钟，加班的情况比较少，所以业余时间比较多。</p>
  <p>但利用业余时间做开源项目时，我的每天真实工作时间可以说是 9117 或者 907，因为晚上下班了，我都会用 2 - 3 个钟来做开源项目，周末的两天也是这样，而且周一到周五的中午吃完饭时，我也会挤出大概 30 - 40 分钟的时候来学习相关的技术，或者做开源项目。</p>
  <p>这样习惯了大概两个月之后，终于把网站的第一版撸了出来。</p>
  <p>所以时间很重要，没有时间你就做不出好的开源项目。</p>
  <p>而且这是一直坚持的结果，如果中途觉得累了，可能就放弃了。</p>
  <p>如果你问我难道不觉得累吗，其实我很少觉得累，因为是做自己喜欢的事，兴致比较高，再加上平时有锻炼身体，所以不累。</p>
  <p>当然，如果你的工作时间是 996 的，可能没那么多时间了，最好是开源一些工作中开发好的插件或者特定功能的轮子之类的。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-52d57bdd4d23968c.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></p>
  <h3 id="#toc39">3.5 推广自己的项目</h3>
  <blockquote>
  <p>有才华很重要，让别人知道你的才华更重要。</p>
  </blockquote>
  <p>酒好也怕巷子深。</p>
  <p>当你做好你的开源项目之后，你以为就会有人给你小星星了，那你就太天真了。</p>
  <p>想收获小星星，还要自己去技术社区推广的，不然没人知道你的项目，现在这个时代，<strong>流量为王</strong>，这一点对于开源项目也是一样的，人来了，了解到你的项目，才有可能给你小星星。</p>
  <p>而且要推广就要脸皮厚，这叫做自我营销。</p>
  <p>所以要写文章介绍你的开源项目，文章的要点主要是突出 <strong>效果与功能</strong>。</p>
  <p>然后就是 <strong>宣传</strong> 了，到各大技术社区（比如：思否、掘金 等）去发布你的文章，达到引流的目的。</p>
  <p>如果想知道怎么写推广的文章，可以参考我写的这两篇文章： <a href="https://juejin.im/post/5bf60810f265da6124151529">react + node + express + ant + mongodb 的简洁兼时尚的博客网站</a> 和 <a href="https://juejin.im/post/5c9dc965e51d4512967dd74c">Vue + TypeScript + Element 项目实践(简洁时尚博客网站)及踩坑记</a>。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-feb06f5fbc2c4bc0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></p>
  <h2 id="#toc210">4. 总结</h2>
  <p>笔者觉得想做好开源项目，最重要因素是兴趣，不然你可能中途就放弃了，很难坚持到把项目做完和做好。</p>
  <p>有时候，有很强的功利心（比如 为了钱、为了名）也是好事，这可是你的一大助力，是可以推动你做完你想做的事的。</p>
  <p>最后，要掌握 GitHub 吸星大法，先从写作开始，从现在开始。</p>
  <p><strong>推荐阅读</strong>：<a href="https://github.com/biaochenxuying/blog/issues/45">GitHub 上能挖矿的神仙技巧 - 如何发现优秀开源项目</a>，估计很多人都不知道的技巧，甚至很多高级工程师都不知道。</p>
  <p><img src="https://upload-images.jianshu.io/upload_images/12890819-9ca557f2b5950174.gif?imageMogr2/auto-orient/strip" alt=""></p>
`;
const mockData: any = {
  // 项目
  getProjectList: {
    code: 0,
    message: "操作成功",
    data: {
      count: "@integer(0,100)",
      "list|10-20": [
        {
          content: "@string(18,26)",
          end_time: +new Date(R.date()),
          img: R.dataImage("350x250"),
          start_time: +new Date(R.date()),
          title: "@string(12,19)",
          url: "@url",
          _id: "@natural(10, 100000)"
        }
      ]
    }
  },
  // 标签云
  getTagList: {
    code: 0,
    message: "操作成功",
    data: {
      count: "@integer(0,100)",
      "list|15-20": [
        {
          name: "@string",
          _id: "@natural(10, 100000)",
          category: "@string"
        }
      ]
    }
  },
  // 喜好
  getFavorite: {
    code: 0,
    message: "操作成功",
    data: {
      fans: R.integer(0, 100),
      article: R.integer(0, 100),
      wordcount: R.integer(0, 100),
      harvestlike: R.integer(0, 100)
    }
  },
  // 获取文章
  getArticleList: {
    code: 0,
    message: "操作成功",
    data: {
      count: "@integer(0,100)",
      "list|15-20": [
        {
          "category|1-5": "@string(3, 5)",
          create_time: +new Date(R.date()),
          desc: "@string(23, 25)",
          img_url: R.dataImage("350x250"),
          meta: {
            views: "@integer(0,100)",
            likes: "@integer(0,100)",
            comments: "@integer(0,100)"
          },
          "tags|3-5": ["@string(3, 5)"],
          title: "@string(10, 15)",
          _id: "@id"
        }
      ]
    }
  },
  // 文章详情
  getArticleDetail: {
    code: 0,
    message: "操作成功",
    data: {
      toc: "@string(10, 15)",
      _id: "@id",
      author: "漫道求索",
      "category|1-5": ["@string(3, 5)"],
      "comments|1-5": [
        {
          user: {
            avatar: R.dataImage("50x50"),
            name: "@string(3, 5)",
            type: "@integer(0,100)"
          },
          create_time: +new Date(R.date()),
          content: "@string(23, 25)",
          _id: "@id",
          "other_comments|1-3": [
            {
              user: {
                avatar: R.dataImage("50x50"),
                name: "@string(3, 5)",
                type: "@integer(0,100)"
              },
              create_time: +new Date(R.date()),
              content: "@string(23, 25)",
              to_user: {
                avatar: R.dataImage("50x50"),
                name: "@string(3, 5)",
                type: "@integer(0,100)"
              }
            }
          ]
        }
      ],
      create_time: +new Date(R.date()),
      desc: "@string(23, 25)",
      content: content,
      id: "@id",
      img_url: R.dataImage("350x250"),
      numbers: "@integer(20,300)",
      "keyword|1-3": ["@string(3, 5)"],
      like_users: [],
      meta: {
        views: "@integer(0,100)",
        likes: "@integer(0,100)",
        comments: "@integer(0,100)"
      },
      origin: 0,
      state: 1,
      "tags|1-3": [
        {
          name: "@string",
          _id: "@natural(10, 100000)",
          category: "@string"
        }
      ],
      title: "@string(23, 25)",
      update_time: +new Date(R.date())
    }
  }
};
Mock.setup({
  timeout: "500 - 1000"
});
for (const key in mockData) {
  let urls: any = URLs;
  if (urls[key]) {
    Mock.mock(new RegExp("/mock/" + urls[key] + ".*"), mockData[key]);
  }
}
