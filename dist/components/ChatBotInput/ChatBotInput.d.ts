import { RefObject, SetStateAction, Dispatch } from "react";
import { Flow } from "../../types/Flow";
import "./ChatBotInput.css";
/**
 * Contains chat input field for user to enter messages.
 *
 * @param inputRef reference to the textarea
 * @param textAreaDisabled boolean indicating if textarea is disabled
 * @param textAreaSensitveMode boolean indicating is textarea is in sensitve mode
 * @param voiceToggledOn boolean indicating if voice is toggled on
 * @param getCurrPath retrieves the current path of user
 * @param handleToggleVoice handles toggling of voice
 * @param handleActionInput handles action input from user
 * @param hasFlowStarted boolean indicating if flow has started
 * @param setHasFlowStarted sets whether the flow has started
 * @param injectMessage utility function for injecting a message into the messages array
 */
declare const ChatBotInput: ({ inputRef, textAreaDisabled, textAreaSensitiveMode, voiceToggledOn, getCurrPath, handleToggleVoice, handleActionInput, hasFlowStarted, setHasFlowStarted, injectMessage }: {
    inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>;
    textAreaDisabled: boolean;
    textAreaSensitiveMode: boolean;
    voiceToggledOn: boolean;
    getCurrPath: () => keyof Flow | null;
    handleToggleVoice: () => void;
    handleActionInput: (path: keyof Flow, userInput: string, sendUserInput?: boolean) => Promise<void>;
    hasFlowStarted: boolean;
    setHasFlowStarted: Dispatch<SetStateAction<boolean>>;
    injectMessage: (content: string | JSX.Element, sender?: string) => Promise<void>;
}) => import("react/jsx-runtime").JSX.Element;
export default ChatBotInput;
