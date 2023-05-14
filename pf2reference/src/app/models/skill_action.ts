export interface skill_actions{
    id: number;
    name: string;
    traits: string[];
    action_description: string;
    prerequisites: string;
    action_type: string;
    trigger: string;
    requirements: string;
    frequency: string;
    cost: string;
    training_required: boolean;
    related_skill: number;
}