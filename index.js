
let link = document.createElement('link');
link.setAttribute('rel',"stylesheet");
link.setAttribute("type", "text/css");  
link.setAttribute("href", 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css');  
document.getElementsByTagName("head")[0].appendChild(link);

export {default as Icon} from './Icon'
export {default as Button} from './Button'
export {default as Checkbox} from './Checkbox'
export {default as Affix} from './Affix'
export {default as Breadcrumb} from './Breadcrumb'
export {default as Dropdown} from './Dropdown'
export {default as Menu} from './Menu'
export {default as Input} from './Input'