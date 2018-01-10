import { Type } from '@angular/core';

export interface NgModuleMetadata {
  declarations?: Array<any>;
  entryComponents?: Array<any>;
  imports?: Array<any>;
  schemas?: Array<any>;
  providers?: Array<any>;
}

export interface ICollection {
  [p: string]: any;
}

export interface NgStory {
  component?: any;
  props: ICollection;
  propsMeta?: ICollection;
  moduleMetadata?: NgModuleMetadata;
  template?: string;
}

export interface NgError {
  message: string;
  stack: string;
}

export type NgProvidedData = NgStory | NgError;

export interface IContext {
  [p: string]: any;
}

export type IGetStoryWithContext = (context: IContext) => NgStory;

export type IRenderStoryFn = (
  story: IGetStoryWithContext,
  context: IContext,
  reRender?: boolean
) => void;
export type IRenderErrorFn = (error: Error) => void;

export interface IModule extends Type<any> {
  annotations: any[];
}

export interface IComponent extends Type<any> {
  annotations: any[];
  parameters: any[];
  propsMetadata: any[];
}
