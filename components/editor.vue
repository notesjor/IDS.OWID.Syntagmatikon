<template>
    <v-container>
      <v-card>
        <v-card-title>
          <v-combobox
            v-model="selectedFont"
            :items="fonts"
            label="Schriftart"
          ></v-combobox>
          <v-btn @click="applyMark('strong')">Fett</v-btn>
          <v-btn @click="applyMark('em')">Kursiv</v-btn>
          <v-switch v-model="showPos">POS</v-switch>
        </v-card-title>
        <v-card-text>
          <div ref="editor" />
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { EditorState } from 'prosemirror-state'
  import { EditorView } from 'prosemirror-view'
  import { schema } from 'prosemirror-schema-basic'
  import { keymap } from 'prosemirror-keymap'
  import { baseKeymap } from 'prosemirror-commands'
  //import { marks } from 'prosemirror-schema-basic'
  
  export default {
    setup() {
      const editor = ref(null)
      const state = EditorState.create({
        schema,
        doc: schema.node('doc', null, [
          schema.node('paragraph', null, [
            schema.text('Dies ist ein Beispieltext.'),
          ]),
        ]),
        plugins: [keymap(baseKeymap)],
      })
  
      let view
  
      function applyMark(type) {
        const { from, to } = view.state.selection
        view.dispatch(view.state.tr.addMark(from, to, schema.mark(type)))
      }
  
      const fonts = ['Arial', 'Helvetica', 'Verdana', 'Times New Roman']
  
      const selectedFont = ref('Arial')
      const showPos = ref(false)
  
      function togglePos() {
        const { from, to } = view.state.selection
        view.dispatch(
          view.state.tr.setMeta('pos', {
            from,
            to,
            value: showPos.value ? 'yes' : 'no',
          })
        )
      }
  
      return {
        editor,
        selectedFont,
        fonts,
        applyMark,
        showPos,
        togglePos,
        mounted() {
          view = new EditorView(editor.value, {
            state,
            dispatchTransaction(transaction) {
              const newState = view.state.apply(transaction)
              view.updateState(newState)
            },
            decorations(state) {
              const { from, to } = state.selection
              if (!showPos.value || from !== to) return null
  
              const pos = state.selection.$head.pos
              const node = document.createElement('div')
              node.className = 'pos-widget'
              node.innerText = state.doc.textBetween(pos - 1, pos)
              return [
                {
                  widget: node,
                  side: 1,
                  mark: schema.mark('pos', { value: showPos.value }),
                },
              ]
            },
          })
        },
        beforeUnmount() {
          view.destroy()
        },
      }
    },
  }
  </script>
  
  <style scoped>
  .pos-widget {
    position: absolute;
    background-color: lightgray;
    border: 1px solid gray;
    padding: 0 4px;
    font-size: 12px;
  }
  </style>