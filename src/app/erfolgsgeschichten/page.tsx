'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote, ArrowRight, X, Check, Star, Users, Clock, Award,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { TapeStrip } from '@/components/ui/TapeStrip';
import storiesData from '@/content/stories/index.json';

type Story = (typeof storiesData.stories)[number];
type FilterType = 'alle' | 'Pflege' | 'Pädagogik' | 'Einrichtung';

// Animated Number Component
function AnimatedNumber({ value }: { value: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="tabular-nums"
    >
      {value}
    </motion.span>
  );
}

// Story Card
function StoryCard({ story, index, onClick }: { story: Story; index: number; onClick: () => void }) {
  const accentColor = story.color === 'amethyst' ? '#8A84F5' : '#23D2AF';
  const bgColor = story.color === 'amethyst' ? 'bg-[#EEEDFE]' : 'bg-[#E0F7F1]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className={`rounded-3xl ${bgColor} p-8 h-full flex flex-col relative overflow-hidden group`}>
        {/* Tape strip decoration */}
        <div
          className="absolute top-4 right-4 w-16 h-6 rotate-12 opacity-30"
          style={{ backgroundColor: accentColor }}
        />

        {/* Badge */}
        <span
          className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold text-white mb-6"
          style={{ backgroundColor: accentColor }}
        >
          {story.bereich}
        </span>

        {/* Quote */}
        <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: accentColor }} />
        <p className="text-[#002D32] text-lg font-medium leading-relaxed mb-6 flex-grow italic">
          &ldquo;{story.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="border-t border-[#002D32]/10 pt-4 mt-auto">
          <p className="font-bold text-[#002D32]">{story.name}</p>
          <p className="text-sm text-[#002D32]/60">{story.role}</p>
          {story.bereich !== 'Einrichtung' && (
            <p className="text-sm" style={{ color: accentColor }}>
              Seit {story.since} • {story.location}
            </p>
          )}
          {story.bereich === 'Einrichtung' && (
            <p className="text-sm" style={{ color: accentColor }}>
              Partner seit {story.since} • {story.location}
            </p>
          )}
        </div>

        {/* Read more indicator */}
        <div className="flex items-center gap-2 mt-4 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: accentColor }}>
          Geschichte lesen <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

// Story Detail Modal
function StoryModal({ story, onClose }: { story: Story; onClose: () => void }) {
  const accentColor = story.color === 'amethyst' ? '#8A84F5' : '#23D2AF';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002D32]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#002D32]/5 hover:bg-[#002D32]/10 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5 text-[#002D32]" />
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
            style={{ backgroundColor: accentColor }}
          >
            {story.bereich}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#002D32] mb-1">
            {story.name}
          </h2>
          <p className="text-[#002D32]/60 mb-2">{story.role}</p>
          <p className="text-sm" style={{ color: accentColor }}>
            {story.bereich === 'Einrichtung' ? 'Partner' : 'Talent'} seit {story.since} • {story.location}
          </p>
        </div>

        {/* Quote */}
        <div className="px-8 py-6">
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: story.color === 'amethyst' ? '#EEEDFE' : '#E0F7F1' }}
          >
            <Quote className="w-6 h-6 mb-3 opacity-30" style={{ color: accentColor }} />
            <p className="text-xl italic text-[#002D32] leading-relaxed">
              &ldquo;{story.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="px-8 pb-6">
          <p className="text-[#002D32]/80 leading-relaxed text-lg">
            {story.story}
          </p>
        </div>

        {/* Benefits */}
        <div className="px-8 pb-8">
          <h3 className="font-bold text-[#002D32] mb-3">
            {story.bereich === 'Einrichtung' ? 'Das schätzt die Einrichtung:' : 'Das schätzt ' + story.name.split(' ')[0] + ':'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {story.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
                <span className="text-sm text-[#002D32]/70">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-8 pb-8">
          <Button
            href={story.bereich === 'Einrichtung' ? '/kontakt' : '/bewerben'}
            variant={story.color === 'amethyst' ? 'secondary' : 'primary'}
            size="lg"
            className="w-full"
          >
            {story.bereich === 'Einrichtung' ? 'Auch Partner werden' : 'Auch so arbeiten'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ErfolgsgeschichtenPage() {
  const [filter, setFilter] = useState<FilterType>('alle');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const filters: FilterType[] = ['alle', 'Pflege', 'Pädagogik', 'Einrichtung'];

  const filteredStories = filter === 'alle'
    ? storiesData.stories
    : storiesData.stories.filter((s) => s.bereich === filter);

  return (
    <main>
      {/* HERO */}
      <Section variant="default">
        <div className="py-16 md:py-24">
          <div className="max-w-3xl">
            <TapeStrip className="mb-6" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-[#002D32] mb-4"
            >
              {storiesData.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl text-[#23D2AF] font-bold mb-6"
            >
              {storiesData.hero.subline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#002D32]/70 leading-relaxed"
            >
              {storiesData.hero.description}
            </motion.p>
          </div>
        </div>
      </Section>

      {/* STATS BAR */}
      <Section variant="turkis">
        <div className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: storiesData.stats.talents, label: 'Talents vertrauen uns' },
              { icon: Clock, value: storiesData.stats.years, label: 'Jahre Erfahrung' },
              { icon: Star, value: storiesData.stats.rating, label: `Sterne auf ${storiesData.stats.ratingSource}` },
              { icon: Award, value: '100%', label: 'Gesundheits- & Sozialwesen' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-[#002D32]/40 mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-black text-[#002D32]">
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="text-sm text-[#002D32]/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* STORIES */}
      <Section variant="default">
        <div className="py-16 md:py-24">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <Filter className="w-5 h-5 text-[#002D32]/40" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === f
                    ? 'bg-[#002D32] text-white'
                    : 'bg-[#002D32]/5 text-[#002D32]/60 hover:bg-[#002D32]/10'
                }`}
              >
                {f === 'alle' ? 'Alle' : f}
              </button>
            ))}
          </motion.div>

          {/* Story Grid */}
          <Grid cols={3}>
            <AnimatePresence mode="wait">
              {filteredStories.map((story, index) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  index={index}
                  onClick={() => setSelectedStory(story)}
                />
              ))}
            </AnimatePresence>
          </Grid>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="coal">
        <div className="py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Deine Geschichte beginnt hier.
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Ob als Talent oder als Einrichtung – schreib das nächste Kapitel mit Promedis24.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/bewerben" variant="primary" size="lg">
                Als Talent bewerben
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/kontakt" variant="secondary" size="lg">
                Als Einrichtung anfragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedStory && (
          <StoryModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
