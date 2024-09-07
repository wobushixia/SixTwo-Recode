<template>
    <div class="h-screen flex flex-col">
      <t-layout class="flex-grow">
        <t-aside>
          <div :style="{ background: 'var(--bg-color-page)', borderRadius: '3px' }">
            <t-menu>
              <t-menu-item value="0">
                <template #icon>
                  <t-icon name="app" />
                </template>
                仪表盘
              </t-menu-item>
  
              <t-submenu value="1" title="资源">
                <template #icon>
                  <t-icon name="code" />
                </template>
                  <t-menu-item value="1-1">
                    <span>班级列表</span>
                  </t-menu-item>
              </t-submenu>
              <t-submenu value="2" title="问题">
                <template #icon>
                  <t-icon name="measurement-1" />
                </template>
                <t-menu-item value="2-1">
                  <span>笔记</span>
                </t-menu-item>
              </t-submenu>
              <t-submenu value="3" title="关于">
                <template #icon>
                  <t-icon name="questionnaire" />
                </template>
                <t-menu-item value="3-1">关于网站</t-menu-item>
                <t-menu-item value="3-2">关于我们</t-menu-item>
                <t-menu-item value="3-3">关于我</t-menu-item>
              </t-submenu>
            </t-menu>
          </div>
        </t-aside>
        <t-content>
          <dashboard />
        </t-content>
      </t-layout>
    </div>
  </template>