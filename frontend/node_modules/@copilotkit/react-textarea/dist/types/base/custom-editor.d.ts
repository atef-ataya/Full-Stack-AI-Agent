import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
type ParagraphElement = {
    type: "paragraph";
    children: CustomText[];
};
type SuggestionElement = {
    type: "suggestion";
    inline: boolean;
    content: string;
    children: CustomText[];
};
type CustomElement = ParagraphElement | SuggestionElement;
type SuggestionAwareText = {
    text: string;
};
type CustomText = SuggestionAwareText;
declare module "slate" {
    interface CustomTypes {
        Editor: CustomEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

export { CustomEditor, CustomElement, CustomText, ParagraphElement, SuggestionAwareText, SuggestionElement };
