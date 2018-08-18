## API
<table>
    <thead>
        <tr>
            <td>
                属性
            </td>
            <td>
                说明
            </td>
            <td>
                类型
            </td>
            <td>
                默认值
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                separator
            </td>
            <td>
                分隔符自定义
            </td>
            <td>
                string
            </td>
            <td>
                '/'
            </td>
        </tr>
    </tbody>
</table>

## 样例
```jsx
<Breadcrumb separator="|">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
    <a href=''><Icon classname="fa-check"></Icon>Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <a href=''><Icon classname="fa-check"></Icon>Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item><Icon classname="fa-check"></Icon>An Application</Breadcrumb.Item>
</Breadcrumb>
```
