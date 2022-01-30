import { component$, onRender$, useHostElement } from '@builder.io/qwik';
import fetch from 'node-fetch';

export interface ContentProps {
  pathname: string;
}

export const ContentPage = component$(async (props: ContentProps) => {
  const el = useHostElement();
  const html = await fetchQwikBuilderContent(props.pathname);
  console.log(el, html);
  return onRender$(() => (
    null
  ));
});


export const fetchQwikBuilderContent = async (url: string) => {
  const qwikUrl = new URL('https://qa.builder.io/api/v1/qwik/content-page');
  qwikUrl.searchParams.set('apiKey', 'fe30f73e01ef40558cd69a9493eba2a2');
  qwikUrl.searchParams.set('userAttributes.urlPath', url);

  const response = await fetch(String(qwikUrl));
  const { html } = await response.json() as any;
  return html;
};
