import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js';
import { Skills } from '../models/skills';
import { skill_actions } from '../models/skill_action';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private supaService: SupabaseService) { }

  public async getSkills():Promise <PostgrestResponse<Skills>>{
    return this.supaService.supabaseClient.from('skills').select('*').order('id');
  }

  public async getSkill(id: number): Promise<PostgrestSingleResponse<Skills>>{
    return this.supaService.supabaseClient.from('skills').select('*').eq('id', id).single();
  }

  public async getUntrainedSkillActions(id: number): Promise<PostgrestResponse<skill_actions>>{
    return this.supaService.supabaseClient.from('skill_actions').select('*').match({related_skill: id, training_required: false});
  }
  
  public async getTrainedSkillActions(id: number): Promise<PostgrestResponse<skill_actions>>{
    return this.supaService.supabaseClient.from('skill_actions').select('*').match({related_skill: id, training_required: true});
  }
}
