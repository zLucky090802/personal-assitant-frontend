export interface ChatMessage {
    status?: string;
    response: string;
    session_id?: string;
    rol?:  'assistant' | 'user'
}