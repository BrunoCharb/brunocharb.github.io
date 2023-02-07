import { Injectable } from '@angular/core';
import {SupabaseService} from './supabase.service';
import {PostgrestResponse, PostgrestSingleResponse} from '@supabase/supabase-js';
import {Character_classes} from '../models/character_classes';
import {Progress_table} from '../models/progress_table';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  constructor( private supaService: SupabaseService) { }

  public async getAllClasses(): Promise<PostgrestResponse<Character_classes>> {
    return this.supaService.supabaseClient.from('character_classes').select('*').order('id');
  }

  public async getClass(classId: string): Promise<PostgrestSingleResponse<Character_classes>>{
    return this.supaService.supabaseClient.from('character_classes').select('*').eq('id', classId).single();
  }

  public async getClassProgression(classId: string): Promise<PostgrestResponse<Progress_table>> {
    return this.supaService.supabaseClient.from('progression_table').select('*')
      .eq('class_id', classId).order('level');
  }
}
