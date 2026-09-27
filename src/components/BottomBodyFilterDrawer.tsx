import React from 'react';
import { X, Filter, RotateCcw, Check } from 'lucide-react';
import type { TattooFilterState } from '../data/bottomBodyTattoos';

interface BottomBodyFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filterState: TattooFilterState;
  setFilterState: React.Dispatch<React.SetStateAction<TattooFilterState>>;
  onReset: () => void;
}

export const BottomBodyFilterDrawer: React.FC<BottomBodyFilterDrawerProps> = ({
  isOpen,
  onClose,
  filterState,
  setFilterState,
  onReset,
}) => {
  if (!isOpen) return null;

  const placements = ['All', 'Lower Back', 'Hip', 'Side Waist', 'Upper Thigh', 'Outer Thigh', 'Lower Abdomen'];
  const styles = ['All', 'Fine Line', 'Minimalist', 'Floral', 'Ornamental', 'Script', 'Geometric', 'Blackwork', 'Watercolor'];
  const sizes = ['All', 'Tiny', 'Small', 'Medium', 'Large'];
  const designTypes = ['All', 'Flower', 'Butterfly', 'Animal', 'Quote', 'Name', 'Symbol', 'Abstract', 'Mandala'];

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0F131C] border border-slate-800 rounded-t-3xl sm:rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#131722]">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-purple-400" />
            <h3 className="font-extrabold text-white text-base">Filter Tattoo Ideas</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Groups */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Placement Filter */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-2.5">
              Placement
            </label>
            <div className="flex flex-wrap gap-2">
              {placements.map((p) => {
                const isSelected = filterState.placement === (p === 'All' ? 'all' : p);
                return (
                  <button
                    key={p}
                    onClick={() =>
                      setFilterState((prev) => ({
                        ...prev,
                        placement: p === 'All' ? 'all' : p,
                      }))
                    }
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Filter */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-2.5">
              Tattoo Style
            </label>
            <div className="flex flex-wrap gap-2">
              {styles.map((s) => {
                const isSelected = filterState.style === (s === 'All' ? 'all' : s);
                return (
                  <button
                    key={s}
                    onClick={() =>
                      setFilterState((prev) => ({
                        ...prev,
                        style: s === 'All' ? 'all' : s,
                      }))
                    }
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-2.5">
              Size
            </label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((sz) => {
                const isSelected = filterState.size === (sz === 'All' ? 'all' : sz);
                return (
                  <button
                    key={sz}
                    onClick={() =>
                      setFilterState((prev) => ({
                        ...prev,
                        size: sz === 'All' ? 'all' : sz,
                      }))
                    }
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Design Type Filter */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-2.5">
              Design Type
            </label>
            <div className="flex flex-wrap gap-2">
              {designTypes.map((dt) => {
                const isSelected = filterState.designType === (dt === 'All' ? 'all' : dt);
                return (
                  <button
                    key={dt}
                    onClick={() =>
                      setFilterState((prev) => ({
                        ...prev,
                        designType: dt === 'All' ? 'all' : dt,
                      }))
                    }
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {dt}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-[#131722]">
          <button
            onClick={onReset}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-purple-950/50 flex items-center gap-2 transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Apply Filters</span>
          </button>
        </div>

      </div>
    </div>
  );
};
