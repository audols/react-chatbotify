/// <reference types="react" />
import { Block } from "../../types/Block";
import { Flow } from "../../types/Flow";
/**
 * Handles processing of options in current block.
 *
 * @param block current block being processed
 * @param path path associated with the current block
 * @param injectMessage utility function for injecting a message into the messages array
 * @param handleActionInput handles action input from user
 */
export declare const processOptions: (block: Block, path: keyof Flow, injectMessage: (content: string | JSX.Element, sender?: string) => void, handleActionInput: (path: keyof Flow, userInput: string, sendUserInput: boolean) => Promise<void>) => void;
