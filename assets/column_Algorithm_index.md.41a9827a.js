import{_ as a,o as i,c as e,V as t}from"./chunks/framework.48b4a519.js";const f=JSON.parse('{"title":"堆栈模型","description":"","frontmatter":{},"headers":[],"relativePath":"column/Algorithm/index.md","filePath":"column/Algorithm/index.md"}'),l={name:"column/Algorithm/index.md"},o=t('<h1 id="堆栈模型" tabindex="-1">堆栈模型 <a class="header-anchor" href="#堆栈模型" aria-label="Permalink to &quot;堆栈模型&quot;">​</a></h1><ul><li>JS 代码执行时</li><li>值类型变量，存储在栈</li><li>引用类型变量，存储在堆</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2022/png/23015620/1650417593804-0a6c0f9c-9cf1-4ada-afd5-f792ef0e9bab.png#clientId=ub39c462c-17f6-4&amp;from=paste&amp;height=486&amp;id=u3fac42df&amp;originHeight=972&amp;originWidth=1636&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=316877&amp;status=done&amp;style=none&amp;taskId=u038f566e-41c8-4a54-a379-2f598053e77&amp;title=&amp;width=818" alt="image.png"></p><h2 id="堆" tabindex="-1">堆 <a class="header-anchor" href="#堆" aria-label="Permalink to &quot;堆&quot;">​</a></h2><ul><li>完全二叉树（左侧先填满）</li><li>最大堆：父节点 &gt;= 子节点</li><li>最小堆：父节点 &lt;= 子节点</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2022/png/23015620/1650417922007-2d2550c2-1202-4b49-baa0-7fb2e4e41c47.png#clientId=ub39c462c-17f6-4&amp;from=paste&amp;height=394&amp;id=uad430426&amp;originHeight=788&amp;originWidth=1722&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=373823&amp;status=done&amp;style=none&amp;taskId=ua90eddbf-b24d-46a8-9689-c520ba3740c&amp;title=&amp;width=861" alt="image.png"></p><h2 id="逻辑结构-vs-物理结构" tabindex="-1">逻辑结构 VS 物理结构 <a class="header-anchor" href="#逻辑结构-vs-物理结构" aria-label="Permalink to &quot;逻辑结构 VS 物理结构&quot;">​</a></h2><ul><li>堆，逻辑结构是一颗二叉树</li><li>但它物理结构是一个数组</li><li>数组：适合连续存储 + 节省空间</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2022/png/23015620/1650418114381-e3ac513b-7592-4ccf-b179-c87e52212fa2.png#clientId=ub39c462c-17f6-4&amp;from=paste&amp;height=463&amp;id=u958947a9&amp;originHeight=926&amp;originWidth=1620&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=392004&amp;status=done&amp;style=none&amp;taskId=ud99fd69b-567a-4188-a42e-ae6af9b4558&amp;title=&amp;width=810" alt="image.png"></p><h2 id="堆-vs-bst" tabindex="-1">堆 VS BST <a class="header-anchor" href="#堆-vs-bst" aria-label="Permalink to &quot;堆 VS BST&quot;">​</a></h2><ul><li>查询比 BST 慢</li><li>删除比 BST 快，维持平衡更快</li><li>但整体的时间复杂度都在 O(logn) 级别，即树的高度</li></ul><h2 id="堆的使用场景" tabindex="-1">堆的使用场景 <a class="header-anchor" href="#堆的使用场景" aria-label="Permalink to &quot;堆的使用场景&quot;">​</a></h2><ul><li>特别适合“堆栈模型”</li><li>堆的数据，都是在栈中引用的，不需要从 root 遍历</li><li>堆恰巧是数组的形式，根据栈的地址，可用 O(1) 找到目标</li></ul><p>lastUpdated: true</p>',14),n=[o];function p(m,r,s,d,c,h){return i(),e("div",null,n)}const g=a(l,[["render",p]]);export{f as __pageData,g as default};
