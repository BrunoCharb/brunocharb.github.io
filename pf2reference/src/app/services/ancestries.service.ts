import { Injectable } from '@angular/core';
import {SupabaseService} from './supabase.service';
import {PostgrestResponse, PostgrestSingleResponse} from '@supabase/supabase-js';
import {Ancestries} from '../models/ancestries';
import {Character_classes} from '../models/character_classes';

@Injectable({
  providedIn: 'root'
})
export class AncestriesService {

  constructor(private supaService: SupabaseService) { }

  public async getAllAncestries(): Promise<PostgrestResponse<Ancestries>> {
    return this.supaService.supabaseClient.from('ancestries').select('*').order('name');
  }

  public async getAncestryByID(id: string): Promise<PostgrestSingleResponse<Ancestries>>{
    return this.supaService.supabaseClient.from('ancestries').select('*').eq('id', id).single();
  }
}
