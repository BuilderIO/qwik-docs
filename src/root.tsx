import { component$, Host, onRender$ } from '@builder.io/qwik';
import { ContentPage } from './content-page';
import { DocsPage } from './docs-page';

export interface RootProps {
  pathname: string;
}

export const Root = component$(async (props: RootProps) => {
  return onRender$(() => (
    <Host>
      {props.pathname.startsWith('/docs/')
        ? <DocsPage pathname={props.pathname}/>
        : <ContentPage pathname={props.pathname}/>
      }
    </Host>
  ));
});

