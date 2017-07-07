import test from 'ava';
import Bemoon from '../src/index'

test((t) => {
  const bem = new Bemoon('block', 'element', 'modifier')
  t.is(bem.block, 'block')
  t.is(bem.element, 'element')
})

test((t) => {
  const bem = new Bemoon('block', 'element', 'modifier')
  t.is(bem.query, '.block__element--modifier')
})

test((t) => {
  const bem = new Bemoon('block', 'element')
  t.is(bem.query, '.block__element')
  bem.mod('active')
  t.is(bem.query, '.block__element--active')
})

test((t) => {
  const bem = new Bemoon('block', 'element', 'modifier')
  t.is(bem.query, '.block__element--modifier')
  bem.clear()
  t.is(bem.query, '.block__element')
})

test((t) => {
  const bem = new Bemoon('block', 'element')
  t.is(bem.mod('active'), 'block__element--active')
  t.is(bem.mod('inactive'), 'block__element--inactive')
})