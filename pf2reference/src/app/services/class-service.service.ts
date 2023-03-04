import { Injectable } from '@angular/core';
import {SupabaseService} from './supabase.service';
import {PostgrestResponse, PostgrestSingleResponse} from '@supabase/supabase-js';
import {Character_classes} from '../models/character_classes';
import {Progress_table} from '../models/progress_table';
import {Subclass} from '../models/subclass';
import {Class_feat} from '../models/class_feat';

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

  public async getSubclasses(classId: string): Promise<PostgrestResponse<Subclass>> {
    return this.supaService.supabaseClient.from('subclasses').select('*')
      .eq('parent_class', classId).order('id');
  }

  public async getClassFeats(classId: string): Promise<PostgrestResponse<Class_feat>>{
    return this.supaService.supabaseClient.from('class_feats').select('*').eq('class', classId).order('id');
  }
}
