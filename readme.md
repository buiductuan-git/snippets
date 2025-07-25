<div style="border: 2px solid #000; padding: 16px; border-radius: 8px;">

## 📢 **IMPORTANT**

Starting from <b>Odoo 18</b> , we will align the versioning of our snippets with the respective Odoo version.
This change is made to help you easily select the appropriate snippets for the version of Odoo you are currently
using.

Please ensure you choose the snippets that match your Odoo version to avoid compatibility issues.

Thank you for your understanding and support! 🙌

Best regards,

<b>Bùi Đức Tuấn</b>

<div align="center">
    <a href="https://www.linkedin.com/in/buiductuan/">
        <img src="./assets/images/linkedin.png"
            width="30" height="30" /></a>
    <a href="#">
        <img src="./assets/images/twitter.png"
            width="30" height="30" alt="twitter logo" />
    </a>
    <a href="https://www.youtube.com/@buiductuan.youtube">
        <img src="./assets/images/youtube.png"
            width="30" height="30" alt="youtube logo" />
    </a>
    <a href="https://www.facebook.com/buiductuan.facebook">
        <img src="./assets//images/facebook.png"
            width="30" height="30" alt="facebook logo" />
    </a>
    <a href="mailto:buiductuan12081995@gmail.com">
        <img src="./assets/images/gmail.png"
            width="30" height="30" alt="gmail logo" />
    </a>
    <a href="https://www.instagram.com/buiductuan.dev/">
        <img src="./assets/images/instagram.png"
            width="30" height="30" alt="instagram logo" />
    </a>
     <a href="https://t.me/buiductuan12081995">
        <img src="./assets/images/telegram.png"
            width="30" height="30" alt="instagram logo" />
    </a>
</div>
</div>

---

###

<div align="center">
<h1>Odoo Extension</h1>
  <img height="200" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnVybDl3bDVwZDV6bGk0MG01bWlkZThtZ3dyMGVubnM4amhmc3d0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MF7oH80ZFs2RF1OqLz/giphy.gif"  />
</div>
This repository provides a collection of VS Code snippets for efficient Odoo development in JavaScript, XML, and Python. The snippets are designed to help developers quickly generate common code structures and components.

# Usage

## Javascript

<details>

| Prefix                | Description    |
| --------------------- | -------------- |
| `console` or `log`    | Console log.   |
| `function`            | Function.      |
| `function` or `arrow` | Arow Function. |

---

| Prefix `import` or `from` | Description                                                                    |
| ------------------------- | ------------------------------------------------------------------------------ |
| `console` or `log`        | Console log.                                                                   |
| `function`                | Function declaration in JavaScript.                                            |
| `arrow` or `function`     | Arrow function syntax in JavaScript.                                           |
| `import` or `from`        | Import statements for modules in JavaScript.                                   |
| `template`                | Creates templates for OWL components in Odoo.                                  |
| `component`               | Imports OWL component in Odoo for development.                                 |
| `will`                    | Imports OWL component lifecycle methods.                                       |
| `registry`                | Imports the OWL registry for managing components.                              |
| `translate`               | Imports the translation function in OWL for localization.                      |
| `memoize`                 | Imports the memoization function for optimized calculations.                   |
| `browser`                 | Imports the OWL browser utility for web interactions.                          |
| `lifecyle-hooks`          | Imports lifecycle hooks for OWL components (e.g., `onWillStart`, `onMounted`). |
| `other-hooks`             | Imports other utility hooks from OWL (e.g., `useState`, `useEffect`).          |
| `onWillStart`             | `onWillStart` hook for asynchronous setup in OWL.                              |
| `onWillRender`            | `onWillRender` hook for actions before rendering in OWL.                       |
| `onRendered`              | `onRendered` hook for actions after rendering in OWL.                          |
| `onMounted`               | `onMounted` hook for actions after mounting a component in OWL.                |
| `onWillUpdateProps`       | `onWillUpdateProps` hook for updating component props in OWL.                  |
| `onWillPatch`             | `onWillPatch` hook for actions before DOM patching in OWL.                     |
| `onPatched`               | `onPatched` hook for actions after DOM patching in OWL.                        |
| `onWillUnmount`           | `onWillUnmount` hook for cleanup before component unmount in OWL.              |
| `onWillDestroy`           | `onWillDestroy` hook for cleanup before component destruction in OWL.          |
| `onError`                 | `onError` hook for handling errors in OWL.                                     |
| `manifest`                | Creates Odoo manifest file for module definition.                              |
| `init`                    | Creates the `__init__.py` for module initialization in Odoo.                   |
| `class` or `model`        | Odoo model class template for defining models.                                 |
| `create` or `def`         | Creates ORM functions in Odoo models.                                          |
| `depends`                 | Adds the `depends` decorator for model dependencies in Odoo.                   |
| `onchange`                | Adds the `@onchange` decorator for fields in Odoo models.                      |
| `field` or `char`         | Creates `Char` field in Odoo models.                                           |
| `form` or `view`          | Defines views like form, tree, kanban, etc., in Odoo XML.                      |
| `action`                  | Creates actions such as window, client, or server actions in Odoo XML.         |

</details>

```javascript
/** @odoo-module */,
import { Component } from '@odoo/owl';,
import { registry } from '@web/core/registry;',
import { standardFieldProps } from '@web/views/fields/standard_field_props';
class SideBar extends Component {
static template = 'MODULE.TEMPLATE_NAME'
static props = {...standardFieldProps};
static defaultProps = {};
setup() {

}
}
registry.category('actions').add('', SideBar),
registry.category('views').add('', SideBar),
registry.category('services').add('', SideBar)
```

## Python

<details>

| Prefix             | Description                       |
| ------------------ | --------------------------------- |
| `manifest`         | Odoo import manifest content      |
| `init`             | Odoo import manifest content.     |
| `class` or `model` | Odoo import model class template. |
| `create` or `def`  | ORM Function.                     |
| `depends`          | Depends Decoration.               |
| `onchange`         | Onchange Decoration.              |
| `field` or `char`  | Char field.                       |

</details>

Examples: `field` or `char`

```python
foo = fields.Char(,
    string='Foo',,
    default='Foo',,
    required=False,
    readonly=False,
    index=False, # [('True' or'btree'), 'btree_not_null', 'trigram', ('None' or 'False')],
    groups='base.group_user',
    company_dependent=False,
    coppy=False,
)
```

## XML

<details>

| Prefix                  | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `form` or `view`        | Odoo import view ['form','tree','kanban',...]    |
| `action`                | Odoo import action ['window','client', 'server'] |
| `.....................` | ....................                             |

</details>

Examples: `form`

```xml
<record id='view_MODEL_NAME_form' model='ir.ui.view'>
<field name='name' />
<field name='model' />
<field name='arch' type='xml'>
    <form
            string=''
            create=''
            edit=''
            duplicate=''
            delete=''
            js_class=''
            disable_autofocus='1'
            banner_route='/module/banner'
        >
        <sheet>
            <group>
                <group>
                    <field name='' widget='' options='{}' />
                </group>
                <group>
                </group>
                </group>
                <notebook>
                    <page>
                        <group>
                            <group>
                                <field name='' widget='' options='{}' />
                            </group>
                            <group>
                            </group>
                        </group>
                    </page>
                </notebook>
        </sheet>
        <div class='oe_chatter'>
            <field name='message_follower_ids' widget='mail_followers' />
            <field name='activity_ids' widget='mail_activity' />
            <field name='message_ids' widget='mail_thread' />
        </div>
    </form>
</field>
</record>
```
