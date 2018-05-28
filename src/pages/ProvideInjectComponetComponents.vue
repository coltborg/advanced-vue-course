<template>
  <div class="p-8 min-h-screen bg-grey-darker">
    <div class="mx-auto max-w-sm">
      <accordion-list>
        <accordion-item :item-id="1">
          <template slot="header">
            Item A
          </template>
          <template slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iste animi ratione aspernatur, maxime fugit quaerat debitis laudantium odio eum quasi ipsam, expedita labore sapiente at perferendis molestiae, iusto quo.
          </template>
        </accordion-item>
        <accordion-item :item-id="2">
          <template slot="header">
            Item B
          </template>
          <template slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iste animi ratione aspernatur, maxime fugit quaerat debitis laudantium odio eum quasi ipsam, expedita labore sapiente at perferendis molestiae, iusto quo.
          </template>
        </accordion-item>
        <accordion-item :item-id="3">
          <template slot="header">
            Item C
          </template>
          <template slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iste animi ratione aspernatur, maxime fugit quaerat debitis laudantium odio eum quasi ipsam, expedita labore sapiente at perferendis molestiae, iusto quo.
          </template>
        </accordion-item>
      </accordion-list>
    </div>
  </div>
</template>

<script>
import AccordionList from '@/components/AccordionList';
import AccordionItem from '@/components/AccordionItem';

export default {
  name: 'ProvideInjectComponetComponents',
  components: {
    AccordionList,
    AccordionItem,
  },
};
</script>

