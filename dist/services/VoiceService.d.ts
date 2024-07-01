import { RefObject, Dispatch, SetStateAction } from "react";
import { Options } from "../types/Options";
/**
 * Starts recording user voice input with microphone.
 *
 * @param botOptions options provided to the bot
 * @param handleToggleVoice handles toggling of voice
 * @param triggerSendVoiceInput triggers sending of voice input into chat window
 * @param setInputLength sets the input length to reflect character count & limit
 * @param setAudioChunk sets the audio chunk if voice input is sent as audio file
 * @param inputRef reference to textarea for input
 */
export declare const startVoiceRecording: (botOptions: Options, handleToggleVoice: () => void, triggerSendVoiceInput: () => void, setInputLength: Dispatch<SetStateAction<number>>, setAudioChunks: Dispatch<SetStateAction<BlobPart[]>>, inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>) => void;
/**
 * Stops all voice recordings.
 */
export declare const stopVoiceRecording: () => void;
/**
 * Syncs voice toggle to textarea state (voice should not be enabled if textarea is disabled).
 *
 * @param keepVoiceOn boolean indicating if voice was on and thus is to be kept toggled on
 * @param botOptions options provided to the bot
 */
export declare const syncVoiceWithChatInput: (keepVoiceOn: boolean, botOptions: Options) => void;
