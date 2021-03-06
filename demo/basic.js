import pokemon from './pokemon.json'
import Autosuggest from '../src'

const schema = {
  type: 'object',
  properties: {
    pokemon: {
      type: 'string',
      title: 'Choose your pokemon',
      enum: pokemon.map(({ name }) => name),
    },
  },
}

const uiSchema = {
  pokemon: {
    'ui:widget': Autosuggest,
    'ui:options': {
      // any options here will be passed to react-autosuggest
    },
  },
}

export default {
  title: 'Basic',
  path: 'basic',
  description:
    'A react-autosuggest component using only react-jsonschema-form options.',
  schema,
  uiSchema,
}
