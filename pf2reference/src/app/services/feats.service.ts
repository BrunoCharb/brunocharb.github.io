import { Injectable } from '@angular/core';
import {SupabaseService} from "./supabase.service";
import {PostgrestResponse} from "@supabase/supabase-js";
import {Class_feat} from "../models/class_feat";

@Injectable({
  providedIn: 'root'
})
export class FeatsService {

  constructor(private supaService: SupabaseService) { }

  public async getFeatsWithTraits(trait: string | undefined): Promise<PostgrestResponse<Class_feat>>{
    return this.supaService.supabaseClient.from('feats').select('*').or(`traits.cs.{${trait}}`).order('level').order('name');
  }
}
