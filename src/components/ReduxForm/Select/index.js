import createAdapter from '../createAdapter'
import createField from '../createField'

import Select, { Option } from 'rc-components/Select'

export const SelectAdapter = createAdapter(Select)
const SelectField = createField(SelectAdapter)

export {
  Option,
  SelectField as Select,
}
export default SelectField
