import { component$, Host, onRender$ } from '@builder.io/qwik';

export interface ContentProps {
  pathname: string;
}

export const DocsPage = component$(async (props: ContentProps) => {
  return onRender$(() => (
    <Host>
      <div class="text-3xl font-bold underline">DOCS</div>
    </Host>
  ));
});

