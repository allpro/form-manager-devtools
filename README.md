# FormManager Dev-tools

Developer tools for the 
[@allpro/form-manager]()
package; primarily a `FieldsTestOutput` form-configuration testing component.

This development helper uses Material-UI to
auto-generate form-fields for testing form/data configuration.

I separated it from the core FormManager component to avoid bloating that
with Material-UI. This component _bundles_ this so works perfectly even if your 
project does not utilize Material-UI. 

In package.json, this should be specified in devDependencies,
because it not required for production.


## Install

```bash
npm install --save @allpro/form-manager-devtools
```

## Usage

```jsx
import React, { Component } from 'react'

import FormManager from '@allpro/form-manager-devtools'
import { FieldsTestOutput } from '@allpro/form-manager-devtools'

const formConfig = { ... }

class MyComponent extends Component {
  constructor(props) {
    super(props)
    
    this.form = FormManager(formConfig, props.data)
  }

  render () {
    return (
      <FieldsTestOutput form={this.form} />
    )
  }
}
```

## License

MIT © [allpro](https://github.com/allpro)
